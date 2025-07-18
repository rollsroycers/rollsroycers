#!/usr/bin/env node

/**
 * Script to add missing English FAQ content to common.json
 */

const fs = require('fs');
const path = require('path');

const ENGLISH_FAQ_CONTENT = {
  faqPage: {
    title: "Frequently Asked Questions",
    subtitle: "Answers to all your questions about Rolls-Royce rental in Dubai",
    description: "Learn everything you need to know about renting luxury Rolls-Royce vehicles",
    
    categories: {
      all: "All Questions",
      booking: "Booking & Reservations",
      requirements: "Requirements",
      pricing: "Pricing & Payment",
      vehicles: "Vehicles",
      services: "Services",
      policies: "Policies"
    },

    questions: {
      // Booking & Reservations
      q1: "How do I book a Rolls-Royce in Dubai?",
      a1: "Booking is simple! You can book online through our website, call us at +971 55 816 4922, or send us a WhatsApp message. We recommend booking at least 48 hours in advance to ensure availability of your preferred vehicle.",

      q2: "Can I book a Rolls-Royce for the same day?",
      a2: "Yes, same-day bookings are possible subject to availability. However, we recommend booking in advance to secure your preferred vehicle. For urgent bookings, please call us directly for immediate assistance.",

      q3: "How far in advance should I book?",
      a3: "For the best selection and guaranteed availability, we recommend booking at least 3-7 days in advance. During peak seasons (November to March) and for special events, booking 2-4 weeks ahead is advisable.",

      q4: "Can I modify or cancel my reservation?",
      a4: "Yes, modifications are free up to 48 hours before your rental. Cancellations made 48+ hours in advance receive a full refund. Cancellations within 24-48 hours incur a 50% charge, and within 24 hours are non-refundable.",

      // Requirements
      q5: "What are the requirements to rent a Rolls-Royce?",
      a5: "You need a valid driving license, passport, credit card, and minimum age of 25 years. International licenses are accepted for up to 30 days, after which you need a UAE license.",

      q6: "Do I need an international driving license?",
      a6: "If you're a tourist, you can use your local license for up to 30 days. For longer stays, you'll need an international driving permit or UAE license.",

      q7: "What is the minimum age for rental?",
      a7: "The minimum age is 25 years. Drivers aged 21-24 can rent with additional young driver fees and higher security deposit.",

      // Pricing & Payment
      q8: "What does the rental price include?",
      a8: "All prices include comprehensive insurance, daily 250km mileage allowance, VAT, and 24/7 roadside assistance. Fuel is not included.",

      q9: "Is there a security deposit?",
      a9: "Yes, a refundable security deposit of AED 5,000-10,000 is required depending on the vehicle model. This is held on your credit card.",

      q10: "Can I get discounts for long-term rentals?",
      a10: "Yes! Weekly rentals get 15% discount, monthly 30%, and 3+ months up to 40% off the daily rate.",

      // Vehicles
      q11: "Which Rolls-Royce models are available?",
      a11: "Our fleet includes Phantom, Ghost, Cullinan, Dawn, and Wraith. All vehicles are latest models equipped with the newest luxury features.",

      q12: "Can I choose the vehicle color?",
      a12: "Yes, we have a range of colors available for each model. Specific colors are subject to availability, so we recommend early booking for preferred colors.",

      q13: "Are all vehicles new?",
      a13: "All our vehicles are latest models (typically less than 3 years old) and maintained to the highest standards at authorized Rolls-Royce centers.",

      // Services
      q14: "Can I get a chauffeur?",
      a14: "Yes, we offer professional chauffeur service for AED 1,500 per day. Our drivers are experienced, courteous, and speak multiple languages.",

      q15: "Do you provide delivery service?",
      a15: "Yes, we provide free delivery and collection in Dubai, and for nominal fees to other emirates. We'll deliver the vehicle to your preferred location.",

      q16: "Can I rent for special occasions?",
      a16: "Absolutely! We offer special packages for weddings, corporate events, photoshoots, and special occasions. Call us for custom quotes.",

      // Policies
      q17: "What is the fuel policy?",
      a17: "You receive the vehicle with a full tank and must return it in the same condition. If not returned full, we charge refueling fees plus service charges.",

      q18: "What happens in case of an accident?",
      a18: "All our vehicles are fully insured. In case of an accident, contact us immediately. You'll be responsible for the deductible amount as mentioned in the contract.",

      q19: "Can I drive the vehicle outside Dubai?",
      a19: "Yes, you can drive throughout the UAE. For travel outside the country, please inform us in advance for necessary approvals.",

      q20: "What are the operating hours?",
      a20: "We're available 24/7 for emergencies and customer service. Regular office hours are 8 AM to 10 PM, 7 days a week."
    },

    contactCta: {
      title: "Didn't find the answer to your question?",
      description: "Our team is ready to help you",
      callButton: "Call Us",
      whatsappButton: "WhatsApp",
      emailButton: "Email Us"
    }
  }
};

function addEnglishFAQContent() {
  console.log('🚀 Adding missing English FAQ content...\n');
  
  const filePath = path.join(__dirname, '..', 'public', 'locales', 'en', 'common.json');
  
  try {
    let existingContent = {};
    if (fs.existsSync(filePath)) {
      existingContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    
    // Add FAQ page content
    existingContent.faqPage = ENGLISH_FAQ_CONTENT.faqPage;
    
    fs.writeFileSync(filePath, JSON.stringify(existingContent, null, 2));
    console.log('✅ English FAQ content added successfully!');
    
    console.log('\n📊 Content Summary:');
    console.log('📝 FAQ Page structure added');
    console.log('🏷️ 7 categories added');
    console.log('❓ 20 questions and answers added');
    console.log('📞 Contact CTA section added');
    
  } catch (error) {
    console.error('❌ Error updating English file:', error.message);
  }
}

if (require.main === module) {
  addEnglishFAQContent();
}

module.exports = { addEnglishFAQContent }; 