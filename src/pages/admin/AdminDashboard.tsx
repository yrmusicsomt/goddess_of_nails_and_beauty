import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, SHOP_ID } from '../../lib/supabase';
import { useServices } from '../../hooks/useServices';
import type { Service, CategoryWithServices } from '../../types/database';
import { ChevronDown, ChevronRight, Plus, Trash2, Save, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const { categories, loading, error, refetch } = useServices(SHOP_ID);
  const [expandedCats, setExpandedCats] = useState<Set<string>>(new Set());
  const [editingService, setEditingService] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Partial<Service>>({});
  const [editingNotes, setEditingNotes] = useState<string | null>(null);
  const [notesValue, setNotesValue] = useState('');
  const [saving, setSaving] = useState(false);
  const [addingTo, setAddingTo] = useState<string | null>(null);
  const [newService, setNewService] = useState({ name: '', price: '', description: '', subcategory: '' });
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const toggleCategory = (id: string) => {
    setExpandedCats(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const startEdit = (svc: Service) => {
    setEditingService(svc.id);
    setEditValues({ name: svc.name, price: svc.price, description: svc.description || '' });
  };

  const cancelEdit = () => {
    setEditingService(null);
    setEditValues({});
  };

  const saveEdit = async (id: string) => {
    setSaving(true);
    const { error } = await supabase
      .from('goddess_services')
      .update({
        name: editValues.name,
        price: editValues.price,
        description: editValues.description || null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id);

    setSaving(false);
    if (!error) {
      setEditingService(null);
      setEditValues({});
      refetch();
    }
  };

  const deleteService = async (id: string) => {
    if (!confirm('Delete this service?')) return;
    await supabase.from('goddess_services').delete().eq('id', id);
    refetch();
  };

  const saveNotes = async (catId: string) => {
    setSaving(true);
    await supabase
      .from('goddess_service_categories')
      .update({ notes: notesValue || null, updated_at: new Date().toISOString() })
      .eq('id', catId);
    setSaving(false);
    setEditingNotes(null);
    refetch();
  };

  const addService = async (categoryId: string, category: CategoryWithServices) => {
    if (!newService.name || !newService.price) return;
    setSaving(true);
    const maxOrder = Math.max(0, ...category.services.map(s => s.display_order));
    await supabase.from('goddess_services').insert({
      category_id: categoryId,
      name: newService.name,
      price: newService.price,
      description: newService.description || null,
      subcategory: newService.subcategory || null,
      display_order: maxOrder + 1,
    });
    setSaving(false);
    setAddingTo(null);
    setNewService({ name: '', price: '', description: '', subcategory: '' });
    refetch();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-charcoal/50 text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-charcoal text-cream px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-light tracking-widest">ADMIN — GODDESS</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 text-sm hover:text-brown transition-colors">
          <LogOut size={16} /> Logout
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-light mb-6 text-charcoal">Service Price Editor</h2>

        {categories.map(cat => (
          <div key={cat.id} className="mb-4 border border-charcoal/15 rounded-lg bg-white overflow-hidden">
            {/* Category header */}
            <button
              onClick={() => toggleCategory(cat.id)}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-cream/50 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                {expandedCats.has(cat.id) ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                <span className="font-medium text-charcoal">{cat.name}</span>
                <span className="text-sm text-charcoal/50">{cat.services.length} services</span>
              </div>
            </button>

            {/* Expanded content */}
            {expandedCats.has(cat.id) && (
              <div className="border-t border-charcoal/10 px-5 py-4">
                {/* Notes editor */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-charcoal/50 uppercase tracking-wider">Category Notes</span>
                    {editingNotes !== cat.id ? (
                      <button
                        onClick={() => { setEditingNotes(cat.id); setNotesValue(cat.notes || ''); }}
                        className="text-xs text-brown hover:underline"
                      >
                        Edit
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <button onClick={() => saveNotes(cat.id)} disabled={saving} className="text-xs text-green-700 hover:underline">Save</button>
                        <button onClick={() => setEditingNotes(null)} className="text-xs text-charcoal/50 hover:underline">Cancel</button>
                      </div>
                    )}
                  </div>
                  {editingNotes === cat.id ? (
                    <textarea
                      value={notesValue}
                      onChange={e => setNotesValue(e.target.value)}
                      className="w-full px-3 py-2 border border-charcoal/20 rounded text-sm bg-white focus:outline-none focus:border-brown"
                      rows={2}
                      placeholder="Category notes (shown below services)"
                    />
                  ) : (
                    <p className="text-sm text-charcoal/60 italic">{cat.notes || '(none)'}</p>
                  )}
                </div>

                {/* Services list */}
                <div className="space-y-2">
                  {cat.services.map(svc => (
                    <div key={svc.id} className="border border-charcoal/10 rounded p-3">
                      {editingService === svc.id ? (
                        <div className="space-y-2">
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              value={editValues.name || ''}
                              onChange={e => setEditValues(v => ({ ...v, name: e.target.value }))}
                              className="px-3 py-2 border border-charcoal/20 rounded text-sm focus:outline-none focus:border-brown"
                              placeholder="Service name"
                            />
                            <input
                              value={editValues.price || ''}
                              onChange={e => setEditValues(v => ({ ...v, price: e.target.value }))}
                              className="px-3 py-2 border border-charcoal/20 rounded text-sm focus:outline-none focus:border-brown"
                              placeholder="Price"
                            />
                          </div>
                          <input
                            value={editValues.description || ''}
                            onChange={e => setEditValues(v => ({ ...v, description: e.target.value }))}
                            className="w-full px-3 py-2 border border-charcoal/20 rounded text-sm focus:outline-none focus:border-brown"
                            placeholder="Description (optional)"
                          />
                          <div className="flex gap-2">
                            <button onClick={() => saveEdit(svc.id)} disabled={saving} className="flex items-center gap-1 px-3 py-1.5 bg-charcoal text-cream rounded text-xs hover:bg-brown transition-colors disabled:opacity-50">
                              <Save size={12} /> Save
                            </button>
                            <button onClick={cancelEdit} className="px-3 py-1.5 border border-charcoal/20 rounded text-xs text-charcoal/70 hover:bg-cream transition-colors">
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              {svc.subcategory && (
                                <span className="text-xs px-2 py-0.5 bg-cream rounded text-charcoal/50">{svc.subcategory}</span>
                              )}
                              <span className="text-sm font-medium text-charcoal">{svc.name}</span>
                            </div>
                            {svc.description && (
                              <p className="text-xs text-charcoal/50 mt-0.5">{svc.description}</p>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-medium text-charcoal">${svc.price}</span>
                            <button onClick={() => startEdit(svc)} className="text-brown hover:underline text-xs">Edit</button>
                            <button onClick={() => deleteService(svc.id)} className="text-red-400 hover:text-red-600 transition-colors">
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Add new service */}
                {addingTo === cat.id ? (
                  <div className="mt-3 border border-dashed border-charcoal/20 rounded p-3 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        value={newService.name}
                        onChange={e => setNewService(v => ({ ...v, name: e.target.value }))}
                        className="px-3 py-2 border border-charcoal/20 rounded text-sm focus:outline-none focus:border-brown"
                        placeholder="Service name *"
                      />
                      <input
                        value={newService.price}
                        onChange={e => setNewService(v => ({ ...v, price: e.target.value }))}
                        className="px-3 py-2 border border-charcoal/20 rounded text-sm focus:outline-none focus:border-brown"
                        placeholder="Price *"
                      />
                    </div>
                    <input
                      value={newService.description}
                      onChange={e => setNewService(v => ({ ...v, description: e.target.value }))}
                      className="w-full px-3 py-2 border border-charcoal/20 rounded text-sm focus:outline-none focus:border-brown"
                      placeholder="Description (optional)"
                    />
                    <input
                      value={newService.subcategory}
                      onChange={e => setNewService(v => ({ ...v, subcategory: e.target.value }))}
                      className="w-full px-3 py-2 border border-charcoal/20 rounded text-sm focus:outline-none focus:border-brown"
                      placeholder="Subcategory (optional, e.g. Gel X, Female Waxing)"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => addService(cat.id, cat)}
                        disabled={saving || !newService.name || !newService.price}
                        className="flex items-center gap-1 px-3 py-1.5 bg-charcoal text-cream rounded text-xs hover:bg-brown transition-colors disabled:opacity-50"
                      >
                        <Plus size={12} /> Add Service
                      </button>
                      <button
                        onClick={() => { setAddingTo(null); setNewService({ name: '', price: '', description: '', subcategory: '' }); }}
                        className="px-3 py-1.5 border border-charcoal/20 rounded text-xs text-charcoal/70 hover:bg-cream transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setAddingTo(cat.id)}
                    className="mt-3 flex items-center gap-1 text-sm text-brown hover:underline"
                  >
                    <Plus size={14} /> Add service
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
