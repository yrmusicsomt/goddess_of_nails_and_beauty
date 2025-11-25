import { CheckCircle } from 'lucide-react';

const SalonPolicy = () => {
  const policies = [
    {
      title: "Health & Safety",
      content: "We reserve the right to refuse service to clients with suspected fungal infections, open wounds, or other health conditions that may pose risks. This ensures the safety of both clients and staff."
    },
    {
      title: "Special Care for Diabetic Clients",
      content: "For your safety, please inform us if you have diabetes when booking your appointment. We do not cut cuticles for diabetic clients to minimize the risk of uncontrollable bleeding or infection."
    },
    {
      title: "Spa Chair Safety",
      content: "Our spa chairs have a maximum weight capacity of 250 lbs (113 kg). Exceeding this limit may damage the chair or cause safety concerns."
    },
    {
      title: "Service Satisfaction & Refund Policy",
      content: "At our salon, your satisfaction is our top priority. If you are not satisfied with your nail color or shape, we are happy to provide complimentary adjustments within 3 days of your original appointment. Please note: No refunds are offered once a service is completed."
    },
    {
      title: "Appointment Punctuality",
      content: "Late arrivals affect other clients' schedules. Appointments may be canceled or rescheduled if you are more than 15 minutes late. We appreciate your understanding and cooperation."
    },
    {
      title: "Promotions & Discounts",
      content: "All promotions are subject to specific conditions and valid only within the stated timeframe."
    },
    {
      title: "Child Safety",
      content: "For their safety, children under 10 years old are not permitted to receive services. Please arrange childcare or supervision during your appointment."
    },
    {
      title: "Personal Belongings",
      content: "We are not responsible for lost or damaged personal items such as phones, purses, or jewelry. Please keep your belongings safe at all times."
    },
    {
      title: "Respectful Environment",
      content: "To ensure a relaxing atmosphere for everyone: Please keep phones on silent or vibrate, speak at a low volume, and use headphones for calls or music. We reserve the right to refuse service to clients who are disruptive or disrespectful."
    },
    {
      title: "Payment Policy",
      content: "Please prepare a valid payment method before your service. Failure to pay after receiving services will result in police notification and legal action. Intentional use of counterfeit money will result in immediate legal action, including involving the police and pressing charges."
    },
    {
      title: "Customer Payment Policy",
      content: "Customers who receive services and refuse to pay will result in the door being locked until enforcement can resolve the issue. This action is taken to ensure justice without physical confrontation. (Note: This is not an act of imprisonment but a measure to resolve payment disputes peacefully.)"
    },
    {
      title: "Closure Policy",
      content: "For the safety of remaining clients and staff, the door will be locked after 7:30 PM (closing time). This measure is not an act of imprisonment. If you do not agree with this policy, please arrive earlier or refrain from signing in."
    },
    {
      title: "Skin Reactions",
      content: "We will not take responsibility for skin reactions to nail products or chemicals. If you are aware of any reactions to certain products, please consult our staff before receiving services, or refrain from receiving services at our salon."
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-charcoal">
            Salon Policies & Guidelines
          </h1>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            By accepting to receive any services, you agree to and acknowledge the following policies
          </p>
        </div>

        {/* Policies List */}
        <div className="space-y-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-charcoal/10 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-brown" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-medium mb-3 text-charcoal">
                    {index + 1}. {policy.title}
                  </h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    {policy.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="mt-12 p-8 bg-[#fdf3e6] rounded-lg text-center border border-brown/20">
          <p className="text-lg text-charcoal/90 italic">
            Thank you for respecting our policies. Our goal is to provide a safe, professional, and comfortable experience for all clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalonPolicy;
