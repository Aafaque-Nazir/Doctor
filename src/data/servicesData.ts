export interface ServiceProcedureStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceMythFact {
  myth: string;
  fact: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface DentalService {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Pain & Root Canal" | "Routine & Cleanings" | "Missing Teeth & Implants" | "Aligners & Braces" | "Oral Surgery" | "Cosmetic & Whitening" | "Kids & Seniors" | "Emergency";
  categoryBadge: string;
  subtitle: string;
  heroDesc: string;
  image: string;
  duration: string;
  painLevel: string;
  healingTime: string;
  idealFor: string[];
  procedureSteps: ServiceProcedureStep[];
  benefits: { title: string; desc: string }[];
  mythsAndFacts: ServiceMythFact[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
}

export const DENTAL_SERVICES: DentalService[] = [
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment (RCT)",
    shortTitle: "Root Canal (RCT)",
    category: "Pain & Root Canal",
    categoryBadge: "Tooth Pain Relief",
    subtitle: "Painless single-sitting root canal to stop severe toothache and save your natural tooth.",
    heroDesc: "A root canal is done when infection reaches the inner nerve of your tooth. Instead of pulling the tooth out, we clean out the infection, seal the root, and protect it with a durable cap so you can chew normally again.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
    duration: "1 to 2 Visits (45 mins each)",
    painLevel: "Painless (Gentle local numbing)",
    healingTime: "1 to 2 days mild soreness",
    idealFor: [
      "Severe throbbing toothache, especially while lying down or sleeping",
      "Sharp pain when drinking hot tea, coffee, or cold water",
      "Pain while biting or chewing food",
      "Swelling or a small pimple on the gum near the painful tooth",
      "Dark discoloration of a tooth after an injury or hit",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Digital X-Ray & Numbing",
        desc: "We take a quick digital X-ray to check how deep the infection is, then gently numb the area so you feel zero pain during the procedure.",
      },
      {
        step: "02",
        title: "Cleaning the Infection",
        desc: "A small opening is made in the tooth to gently clean out the infected pulp and bacteria from the root canals.",
      },
      {
        step: "03",
        title: "Disinfection & Sealing",
        desc: "The clean canals are washed with antibacterial solution and sealed with a rubber-like biocompatible material to prevent future infection.",
      },
      {
        step: "04",
        title: "Permanent Crown (Cap)",
        desc: "A custom zirconia or ceramic crown is placed over the tooth to restore full chewing strength and prevent the tooth from cracking.",
      },
    ],
    benefits: [
      {
        title: "Saves Natural Tooth",
        desc: "Nothing functions as well as your real tooth. RCT prevents premature extraction and bone loss.",
      },
      {
        title: "Instant Pain Relief",
        desc: "Removing the infected nerve permanently eliminates the source of severe throbbing tooth pain.",
      },
      {
        title: "Chew Without Worry",
        desc: "With a strong dental crown, you can bite and chew all your favorite foods comfortably.",
      },
      {
        title: "Single Sitting Option",
        desc: "Most uncomplicated cases are completed in just one relaxed 45-minute appointment.",
      },
    ],
    mythsAndFacts: [
      {
        myth: "Root canal treatment is extremely painful.",
        fact: "Modern local numbing makes RCT completely painless. The procedure actually relieves pain caused by the tooth infection.",
      },
      {
        myth: "Pulling the tooth out is better and cheaper than doing an RCT.",
        fact: "Extracting a tooth leaves an empty gap that requires expensive implants or bridges later. Saving your natural tooth is always healthier and more economical in the long run.",
      },
      {
        myth: "If the tooth pain stops on its own, I don't need a root canal anymore.",
        fact: "When severe pain suddenly disappears, it usually means the tooth nerve has died. The bacterial infection is still active in the jawbone and will cause a larger abscess if left untreated.",
      },
    ],
    faqs: [
      {
        question: "How long does a root canal treatment take?",
        answer: "Most straightforward root canals are finished in a single 45-minute visit. If the tooth has severe swelling or curved canals, we may divide it into two short visits to ensure complete disinfection.",
      },
      {
        question: "Is putting a crown (cap) necessary after an RCT?",
        answer: "Yes, in almost all back chewing teeth. Once the nerve is removed, the tooth becomes brittle over time. A strong crown protects the tooth from cracking when you bite hard food.",
      },
      {
        question: "Can I eat after the treatment?",
        answer: "You should wait until the numbness wears off (about 1 to 2 hours) so you do not accidentally bite your tongue or cheek. Stick to soft foods for the first day.",
      },
    ],
    relatedSlugs: ["crowns-and-bridges", "cavity-fillings", "emergency-dental-care"],
  },
  {
    slug: "teeth-cleaning-scaling",
    title: "Teeth Cleaning & Scaling",
    shortTitle: "Cleaning & Scaling",
    category: "Routine & Cleanings",
    categoryBadge: "Preventive Care",
    subtitle: "Ultrasonic tartar removal and enamel polishing to stop bleeding gums and bad breath.",
    heroDesc: "No matter how well you brush at home, saliva minerals turn plaque into hardened tartar (calculus) that only a dentist can remove. Ultrasonic scaling cleans beneath the gum line, prevents gum disease, and leaves your mouth fresh and clean.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80",
    duration: "Single Visit (30 to 40 mins)",
    painLevel: "Painless (Mild ticklish vibration)",
    healingTime: "Immediate (Zero downtime)",
    idealFor: [
      "Bleeding gums while brushing or eating hard foods like apples",
      "Yellow or brownish tartar deposits on the back of front teeth",
      "Persistent bad breath that doesn't go away after mouthwash",
      "Stains from tea, coffee, smoking, or turmeric",
      "Regular 6-month checkup and preventive hygiene",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Oral Exam & Gum Check",
        desc: "We inspect your gums, check for any deep pockets or early cavities, and identify areas with tartar buildup.",
      },
      {
        step: "02",
        title: "Ultrasonic Scaling",
        desc: "A fine vibrating tip with cool water spray gently breaks loose hardened tartar and plaque from tooth surfaces and gum margins.",
      },
      {
        step: "03",
        title: "Stain Removal",
        desc: "Stubborn surface stains from tea, coffee, and food colors are cleaned without scratching your enamel.",
      },
      {
        step: "04",
        title: "Enamel Polishing",
        desc: "A pleasant mint polishing paste is applied to make teeth glassy smooth, making it harder for new plaque to stick.",
      },
    ],
    benefits: [
      {
        title: "Stops Bleeding Gums",
        desc: "Removing bacterial tartar allows inflamed gums to heal, tighten, and stop bleeding within days.",
      },
      {
        title: "Fresher Breath",
        desc: "Eliminates odor-causing bacteria hiding beneath tartar buildup.",
      },
      {
        title: "Prevents Tooth Loss",
        desc: "Untreated tartar causes pyorrhea (periodontitis), which loosens teeth. Regular scaling saves your teeth.",
      },
      {
        title: "Smooth, Clean Feel",
        desc: "Leaves your mouth feeling noticeably lighter, cleaner, and refreshed.",
      },
    ],
    mythsAndFacts: [
      {
        myth: "Teeth scaling makes your teeth loose or creates gaps.",
        fact: "Scaling NEVER makes teeth loose. When severe tartar builds up, it pushes gums down and covers the gaps. When tartar is cleaned away, people feel the existing gap. Removing the tartar is what prevents the tooth from actually falling out.",
      },
      {
        myth: "Scaling wears down or scratches tooth enamel.",
        fact: "Ultrasonic scalers only vibrate; they do not cut or scratch enamel. Enamel is the hardest tissue in the human body and is completely safe during scaling.",
      },
      {
        myth: "You only need teeth cleaning if you have pain.",
        fact: "Tartar and gum disease develop silently without pain until teeth become loose. Regular 6-month cleanings prevent trouble before it starts.",
      },
    ],
    faqs: [
      {
        question: "How often should I get my teeth cleaned?",
        answer: "Dentists recommend a routine scaling and polishing every 6 months to maintain healthy pink gums and prevent cavities.",
      },
      {
        question: "Will my teeth be sensitive after cleaning?",
        answer: "If you had significant tartar buildup, you might feel slight cold sensitivity for 24 to 48 hours as your gums adjust. This is normal and fades quickly.",
      },
      {
        question: "Does scaling whiten teeth?",
        answer: "Scaling removes dark tea, coffee, and tobacco stains to reveal your natural tooth shade. For deeper enamel lightening, we offer professional teeth whitening.",
      },
    ],
    relatedSlugs: ["cavity-fillings", "teeth-whitening", "kids-dentistry"],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortTitle: "Dental Implants",
    category: "Missing Teeth & Implants",
    categoryBadge: "Permanent Replacement",
    subtitle: "Permanent replacement for missing teeth anchored into the jawbone just like natural roots.",
    heroDesc: "A dental implant is the closest thing to a natural tooth. A small biocompatible titanium post is placed securely into your jawbone, where it bonds naturally. It is topped with a lifelike crown, giving you back 100% chewing strength with no slipping.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    duration: "2 to 3 Stages over 3 to 4 Months",
    painLevel: "Painless (Local anesthesia with mild post-op ache)",
    healingTime: "3 to 5 days initial healing",
    idealFor: [
      "One or more missing teeth due to accident, decay, or extraction",
      "Difficulty chewing food properly because of missing molars",
      "Loose or uncomfortable removable dentures that slip when talking",
      "Desire to replace a missing tooth without cutting adjacent healthy teeth for a bridge",
      "Preventing jawbone shrinkage and sunken facial wrinkles",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "3D Bone Scan (CBCT)",
        desc: "We take a high-resolution 3D scan to check bone depth and plan the exact angle and size of the implant.",
      },
      {
        step: "02",
        title: "Gentle Implant Placement",
        desc: "Under gentle local numbing, the titanium implant post is placed in the jawbone. Most patients say it feels easier than a tooth extraction.",
      },
      {
        step: "03",
        title: "Natural Osseointegration",
        desc: "Over 8 to 12 weeks, the implant naturally bonds with your jawbone to create an unshakable foundation.",
      },
      {
        step: "04",
        title: "Custom Crown Fitting",
        desc: "A custom zirconia crown matched to the exact shade and shape of your surrounding teeth is securely attached.",
      },
    ],
    benefits: [
      {
        title: "100% Chewing Strength",
        desc: "Chew nuts, apples, rotis, and meat with zero slipping or discomfort.",
      },
      {
        title: "Protects Neighboring Teeth",
        desc: "Unlike a dental bridge, adjacent healthy teeth do not need to be shaved down.",
      },
      {
        title: "Stops Bone Loss",
        desc: "Stimulates jawbone growth, preventing the sunken jaw appearance caused by missing teeth.",
      },
      {
        title: "Lasts a Lifetime",
        desc: "With normal daily brushing and flossing, quality dental implants can last 25+ years or a lifetime.",
      },
    ],
    mythsAndFacts: [
      {
        myth: "Getting a dental implant requires painful surgery and hospital stay.",
        fact: "Implant placement is a simple, minor in-clinic procedure done in 30 to 45 minutes under local numbing. Most patients return to work the very next day.",
      },
      {
        myth: "Older people cannot get dental implants.",
        fact: "Age is never a barrier. As long as you have reasonable general health and adequate bone, implants are successful in patients in their 70s and 80s.",
      },
      {
        myth: "Dental implants require special cleaners.",
        fact: "You brush and floss an implant exactly like a natural tooth. No messy adhesives or soaking cups needed.",
      },
    ],
    faqs: [
      {
        question: "How long does a dental implant last?",
        answer: "Dental implants have a 95% to 98% long-term success rate. With good brushing and regular cleanings, they routinely last a lifetime.",
      },
      {
        question: "Is the procedure painful?",
        answer: "Not at all during the procedure because the area is thoroughly numbed. Afterwards, any mild tenderness is easily handled with standard mild pain relief medicine for a couple of days.",
      },
      {
        question: "What if I don't have enough bone for an implant?",
        answer: "We perform simple bone grafting or use specialized short/angled implants so patients with reduced bone can still receive permanent teeth safely.",
      },
    ],
    relatedSlugs: ["crowns-and-bridges", "dentures", "root-canal-treatment"],
  },
  {
    slug: "teeth-straightening-aligners",
    title: "Teeth Straightening & Clear Aligners",
    shortTitle: "Aligners & Braces",
    category: "Aligners & Braces",
    categoryBadge: "Orthodontics",
    subtitle: "Straighten crooked teeth and close gaps comfortably with clear, removable invisible aligners or braces.",
    heroDesc: "Get a straight, balanced smile without awkward metal wires. Clear aligners are custom-made transparent plastic trays that gradually guide your teeth into proper alignment. You can take them out to eat, brush, and attend special occasions.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80",
    duration: "6 to 12 Months Average",
    painLevel: "Mild pressure during first 2 days of a new tray",
    healingTime: "Zero downtime (Carry on normal life)",
    idealFor: [
      "Crowded or overlapping front teeth",
      "Noticeable gaps between front teeth (diastema)",
      "Overbite, underbite, or crossbite affecting chewing",
      "Adults and working professionals wanting discreet straightening",
      "Teeth that shifted back after previous childhood braces",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "3D Digital Scan",
        desc: "We scan your teeth in 3 minutes with a handheld 3D wand—no messy gaggy impression trays.",
      },
      {
        step: "02",
        title: "3D Smile Simulation",
        desc: "Our software designs your treatment step-by-step. You see a 3D video of your teeth moving into place before you start.",
      },
      {
        step: "03",
        title: "Custom Trays Delivered",
        desc: "You receive your set of smooth, BPA-free clear trays. You change to a new set every 1 to 2 weeks at home.",
      },
      {
        step: "04",
        title: "Retainer & Final Smile",
        desc: "Once your teeth are straight, a simple nighttime retainer keeps your smile in place permanently.",
      },
    ],
    benefits: [
      {
        title: "Virtually Invisible",
        desc: "People won't even notice you are wearing them in meetings or photos.",
      },
      {
        title: "Eat Whatever You Want",
        desc: "Simply remove the trays during meals. No food restrictions like hard rotis, nuts, or popcorn.",
      },
      {
        title: "Easy Brushing & Flossing",
        desc: "Unlike metal braces where food gets trapped, you take off your trays and brush normally.",
      },
      {
        title: "Fewer Clinic Visits",
        desc: "We give you several trays in advance, so you only need quick check-ins every 6 to 8 weeks.",
      },
    ],
    mythsAndFacts: [
      {
        myth: "Clear aligners only work for minor gap cases.",
        fact: "Modern 3D digital planning allows clear aligners to fix severe crowding, deep bites, and rotations just as effectively as traditional braces.",
      },
      {
        myth: "Teeth straightening is only for teenagers.",
        fact: "Over 40% of our aligner patients are working adults in their 20s, 30s, 40s, and 50s who want a straight smile for career confidence.",
      },
      {
        myth: "Aligners are painful to wear.",
        fact: "You will feel a mild, reassuring tightness for the first 24 hours of each new tray, but there are zero sharp metal wires to poke your cheeks.",
      },
    ],
    faqs: [
      {
        question: "How many hours a day do I need to wear aligners?",
        answer: "For optimal results, wear your aligners for 20 to 22 hours every day, taking them out only when eating meals or brushing your teeth.",
      },
      {
        question: "Do aligners affect my speech?",
        answer: "You might notice a tiny lisp for the first 24 to 48 hours as your tongue gets used to the trays. After that, speech returns completely to normal.",
      },
      {
        question: "Can I choose ceramic or metal braces instead?",
        answer: "Yes, we also offer high-grade ceramic (tooth-colored) and metal braces for complex cases or patients who prefer fixed braces.",
      },
    ],
    relatedSlugs: ["cosmetic-dentistry", "teeth-cleaning-scaling", "teeth-whitening"],
  },
  {
    slug: "crowns-and-bridges",
    title: "Dental Crowns & Bridges (Caps)",
    shortTitle: "Crowns & Bridges",
    category: "Missing Teeth & Implants",
    categoryBadge: "Tooth Protection",
    subtitle: "Durable, natural-looking zirconia and ceramic caps to protect weak teeth or replace missing teeth.",
    heroDesc: "A dental crown (cap) fits over a damaged or post-RCT tooth to restore its original shape, strength, and appearance. A dental bridge replaces one or more missing teeth by anchoring an artificial tooth between adjacent healthy teeth.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80",
    duration: "2 Visits over 3 to 5 Days",
    painLevel: "Painless (Local numbing)",
    healingTime: "Immediate normal chewing after cementing",
    idealFor: [
      "Protecting a tooth after a Root Canal Treatment (RCT)",
      "Severely cracked, fractured, or worn-down teeth",
      "Replacing a missing tooth without undergoing implant surgery",
      "Covering deeply discolored or misshapen teeth",
      "Replacing old dark metal crowns with metal-free ceramic",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Tooth Preparation",
        desc: "We gently reshape the tooth under local numbing so the crown can fit smoothly over it.",
      },
      {
        step: "02",
        title: "Digital 3D Impression",
        desc: "A digital 3D scan captures the exact bite and shade of your neighboring teeth for a precise match.",
      },
      {
        step: "03",
        title: "Temporary Cap & Lab Crafting",
        desc: "You receive a comfortable temporary cap while the dental lab crafts your custom zirconia or ceramic crown.",
      },
      {
        step: "04",
        title: "Permanent Cementation",
        desc: "We check the bite and fit, make sure you love the look, and permanently bond the crown in place.",
      },
    ],
    benefits: [
      {
        title: "Rock-Solid Chewing",
        desc: "Zirconia crowns have incredible strength, letting you bite tough foods with total confidence.",
      },
      {
        title: "Zero Black Metal Margins",
        desc: "Modern all-ceramic and zirconia crowns never develop dark gray lines near the gum line over time.",
      },
      {
        title: "Prevents Tooth Fractures",
        desc: "Keeps treated teeth from splitting in half, saving you from tooth extraction.",
      },
      {
        title: "Color Matched to Enamel",
        desc: "Shaded carefully so nobody can tell which tooth has a cap.",
      },
    ],
    mythsAndFacts: [
      {
        myth: "All dental caps show an ugly dark line near the gum.",
        fact: "Only old metal-fused crowns did that. We use 100% metal-free monolithic Zirconia and E-max ceramic that stay naturally white forever.",
      },
      {
        myth: "Caps come off easily while eating sticky foods.",
        fact: "Modern dental resin cements form a chemical bond with the tooth. A properly fitted crown stays solidly in place for decades.",
      },
      {
        myth: "Food always gets stuck under a dental bridge.",
        fact: "A properly contoured bridge has smooth margins that allow easy cleaning with special floss threaders or water flossers.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between Zirconia and Ceramic crowns?",
        answer: "Zirconia is virtually indestructible and ideal for heavy-chewing back molars. E-max ceramic offers top-tier translucency and is ideal for front teeth.",
      },
      {
        question: "How long do dental crowns last?",
        answer: "With normal oral hygiene, high-quality crowns typically last 15 to 25 years or longer.",
      },
      {
        question: "Can a crowned tooth get a cavity?",
        answer: "The porcelain cap itself cannot decay, but bacteria can attack the natural tooth margin where the cap meets the gum if not brushed properly.",
      },
    ],
    relatedSlugs: ["root-canal-treatment", "dental-implants", "cavity-fillings"],
  },
  {
    slug: "wisdom-tooth-removal",
    title: "Wisdom Tooth Removal & Surgery",
    shortTitle: "Wisdom Tooth",
    category: "Oral Surgery",
    categoryBadge: "Painless Extraction",
    subtitle: "Gentle, painless removal of impacted, painful, or tilted wisdom teeth with fast recovery.",
    heroDesc: "Wisdom teeth are the last molars to emerge in your late teens or twenties. Frequently, there isn't enough space in the jaw, causing them to get stuck (impacted), grow sideways, push against other teeth, or trigger recurrent painful gum infections.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
    duration: "Single Visit (30 to 45 mins)",
    painLevel: "Painless (Deep local numbing, zero sharp pain)",
    healingTime: "3 to 5 days for gums to settle",
    idealFor: [
      "Severe pain, swelling, or redness in the very back of your jaw",
      "Difficulty opening your mouth or swallowing comfortably",
      "Food constantly packing in the flap of gum over the back molar",
      "Wisdom tooth growing horizontally and damaging the healthy molar in front",
      "Cysts or recurrent jaw infections on digital X-ray",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Panoramic X-Ray",
        desc: "We take a full jaw X-ray to see the exact root curvature and position of the nerve beneath the wisdom tooth.",
      },
      {
        step: "02",
        title: "Thorough Numbing",
        desc: "We numb the entire jaw area completely. You will feel pressure during the procedure, but zero sharp pain.",
      },
      {
        step: "03",
        title: "Gentle Extraction",
        desc: "If the tooth is tilted under bone, we gently section it into smaller pieces for a smooth, atraumatic removal.",
      },
      {
        step: "04",
        title: "Clean Healing & Guidance",
        desc: "We clean the site, place dissolving stitches if needed, and give you cold packs and clear aftercare instructions.",
      },
    ],
    benefits: [
      {
        title: "Ends Chronic Jaw Pain",
        desc: "Eliminates recurrent jaw swelling, headaches, and ear-radiating pain.",
      },
      {
        title: "Protects Healthy Molars",
        desc: "Prevents the neighboring permanent molar from getting a deep, unreachable cavity.",
      },
      {
        title: "Prevents Crowding",
        desc: "Stops erupting wisdom teeth from pushing straight front teeth out of alignment.",
      },
      {
        title: "Fast Recovery",
        desc: "Most patients relax at home for a day or two and resume normal activities quickly.",
      },
    ],
    mythsAndFacts: [
      {
        myth: "Wisdom tooth extraction is traumatic and requires bed rest for weeks.",
        fact: "With modern surgical techniques and gentle numbing, an extraction takes 20 to 30 minutes. Most patients are back at work within 2 days.",
      },
      {
        myth: "Removing a wisdom tooth causes loss of eyesight or memory.",
        fact: "This is an old rural myth with zero medical basis. The nerves of your teeth have completely separate pathways from your eyes and brain.",
      },
      {
        myth: "Every single wisdom tooth must be removed.",
        fact: "If a wisdom tooth erupts straight, has room in the jaw, and can be cleaned easily, it can stay healthy without removal.",
      },
    ],
    faqs: [
      {
        question: "What can I eat after a wisdom tooth extraction?",
        answer: "Stick to soft, cool foods for the first 24 to 48 hours: yogurt, khichdi, dalia, ice cream, smoothies, and soups. Avoid hot liquids, hard crunchy chips, and drinking through straws.",
      },
      {
        question: "Why should I avoid using a straw after extraction?",
        answer: "Sucking on a straw creates negative pressure that can dislodge the healing blood clot (causing a dry socket). Drink straight from a cup.",
      },
      {
        question: "When should stitches be removed?",
        answer: "We usually use dissolvable stitches that disappear on their own in 7 to 10 days, so you don't even need a removal visit.",
      },
    ],
    relatedSlugs: ["root-canal-treatment", "emergency-dental-care", "teeth-cleaning-scaling"],
  },
  {
    slug: "cavity-fillings",
    title: "Cavity Fillings & Tooth Repair",
    shortTitle: "Cavity Fillings",
    category: "Routine & Cleanings",
    categoryBadge: "Tooth Repair",
    subtitle: "Tooth-colored composite fillings to remove decay, fix food lodgment, and restore your natural tooth.",
    heroDesc: "Catching a cavity early is the simplest, most affordable way to save your tooth. We gently remove the decay and fill the space with a durable, tooth-colored composite resin that bonds directly to your enamel, making it invisible to the naked eye.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
    duration: "Single Visit (20 to 30 mins)",
    painLevel: "Painless (Light numbing if cavity is deep)",
    healingTime: "Immediate (Eat right away)",
    idealFor: [
      "Dark brown or black spots visible on tooth chewing surfaces",
      "Food constantly getting caught between teeth after meals",
      "Mild sensitivity to sweet foods, chocolates, or cold water",
      "Chipped or rough enamel edge irritating your tongue",
      "Replacing old, dark silver mercury fillings with clean white resin",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Gentle Decay Removal",
        desc: "We gently remove only the soft, decayed tooth structure, keeping as much healthy natural tooth as possible.",
      },
      {
        step: "02",
        title: "Tooth Preparation & Conditioning",
        desc: "The tooth surface is conditioned with a mild gel so the composite filling forms a strong microscopic bond.",
      },
      {
        step: "03",
        title: "Layering Tooth-Colored Resin",
        desc: "We place composite material matched to your exact tooth shade, sculpting natural tooth grooves.",
      },
      {
        step: "04",
        title: "Blue Light Curing & Polish",
        desc: "A specialized blue curing light hardens the filling in seconds, followed by a smooth polish so your bite feels completely natural.",
      },
    ],
    benefits: [
      {
        title: "Stops Decay from Reaching Nerve",
        desc: "A timely filling prevents the need for an expensive root canal later on.",
      },
      {
        title: "100% Invisible",
        desc: "Matches your natural enamel shade perfectly—no dark metal or silver spots.",
      },
      {
        title: "Strengthens Tooth Structure",
        desc: "Composite resin bonds chemically to enamel, restoring original tooth strength.",
      },
      {
        title: "Zero Mercury",
        desc: "Modern biocompatible resin is 100% safe, durable, and mercury-free.",
      },
    ],
    mythsAndFacts: [
      {
        myth: "White tooth-colored fillings are weak and fall out quickly.",
        fact: "Modern micro-hybrid composites bond tightly to tooth structure and easily withstand normal chewing forces for 7 to 10+ years.",
      },
      {
        myth: "If a cavity doesn't hurt, it doesn't need to be filled yet.",
        fact: "Enamel has no nerves, so early cavities don't hurt! By the time a tooth aches, decay has reached the pulp nerve and requires a root canal.",
      },
      {
        myth: "Fillings take days to dry before you can eat.",
        fact: "The blue curing light hardens the composite filling in 20 seconds. You can eat immediately after the appointment.",
      },
    ],
    faqs: [
      {
        question: "How long does a composite tooth filling last?",
        answer: "With regular brushing and cleanings, high-quality composite fillings last 7 to 10 years or longer.",
      },
      {
        question: "Will I need an injection for a filling?",
        answer: "Small surface cavities don't even require numbing! For deeper cavities close to the nerve, we apply a gentle numbing gel before giving a painless injection.",
      },
      {
        question: "Can I replace my old black silver fillings with white ones?",
        answer: "Yes, we frequently replace old, cracked silver amalgam fillings with clean, tooth-colored composite resin for a healthier look.",
      },
    ],
    relatedSlugs: ["root-canal-treatment", "teeth-cleaning-scaling", "crowns-and-bridges"],
  },
  {
    slug: "teeth-whitening",
    title: "Professional Teeth Whitening",
    shortTitle: "Teeth Whitening",
    category: "Cosmetic & Whitening",
    categoryBadge: "Smile Brightening",
    subtitle: "In-office 60-minute teeth whitening to lift years of coffee, tea, and yellow stains safely.",
    heroDesc: "Over time, tea, coffee, spices, and everyday living darken tooth enamel. Our in-office whitening uses safe, dentist-supervised light-activated gel to lift deep stubborn stains and brighten your teeth by 4 to 8 shades in a single relaxing session.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80",
    duration: "Single Visit (60 mins)",
    painLevel: "Painless (Mild temporary sensitivity for a few hours)",
    healingTime: "Immediate visible results",
    idealFor: [
      "Teeth yellowed from tea, coffee, wine, or tobacco use",
      "Preparing for a wedding, graduation, job interview, or special event",
      "Aging enamel that has gradually darkened over time",
      "Wanting a noticeable, natural-looking confidence boost quickly",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Shade Match & Lip Protection",
        desc: "We record your baseline tooth shade, then gently isolate your gums and lips with a protective barrier.",
      },
      {
        step: "02",
        title: "Whitening Gel Application",
        desc: "Professional-grade dental whitening gel is carefully painted onto each tooth surface.",
      },
      {
        step: "03",
        title: "LED Light Activation",
        desc: "A cool blue LED accelerator light shines on the gel for 15-minute rounds to break apart deep stain molecules.",
      },
      {
        step: "04",
        title: "Rinse & Fluoride Treatment",
        desc: "We wash off the gel and apply a soothing desensitizing polish so your teeth feel smooth and protected.",
      },
    ],
    benefits: [
      {
        title: "4 to 8 Shades Brighter",
        desc: "Significantly faster and more effective than drugstore toothpastes or strips.",
      },
      {
        title: "Safe for Enamel",
        desc: "Dentist-supervised whitening protects your gums and does not erode enamel.",
      },
      {
        title: "Instant Results in 1 Hour",
        desc: "Walk in with yellow stains, walk out with a clean, radiant white smile.",
      },
      {
        title: "Long Lasting",
        desc: "Results last 1 to 2 years with routine brushing and simple home touchups.",
      },
    ],
    mythsAndFacts: [
      {
        myth: "Teeth whitening damages enamel and makes teeth brittle.",
        fact: "Professional whitening only oxidizes organic stain particles inside microscopic enamel pores; it does not erode or weaken tooth structure.",
      },
      {
        myth: "Whitening toothpastes do the exact same thing.",
        fact: "Abrasive whitening toothpastes only scrub superficial plaque and can wear down enamel. Only dental-grade gel safely lifts deep intrinsic yellowing.",
      },
      {
        myth: "Teeth stay permanently white forever after one treatment.",
        fact: "Because we continue eating spices, tea, and coffee, touch-ups every 12 to 18 months keep your smile brilliantly bright.",
      },
    ],
    faqs: [
      {
        question: "Does teeth whitening hurt?",
        answer: "The procedure is painless. Some patients experience mild 'zingers' (temporary sensitivity) for 12 to 24 hours, which completely subsides with desensitizing paste.",
      },
      {
        question: "Can I drink coffee or tea after the treatment?",
        answer: "We recommend following the 'White Diet' for the first 48 hours: avoid dark coffee, red wine, turmeric curries, and dark sodas while enamel pores settle.",
      },
      {
        question: "Will whitening work on fillings or crowns?",
        answer: "Whitening only works on natural tooth enamel. If you have existing front fillings or crowns, they will stay their original shade.",
      },
    ],
    relatedSlugs: ["cosmetic-dentistry", "teeth-cleaning-scaling", "teeth-straightening-aligners"],
  },
  {
    slug: "cosmetic-dentistry",
    title: "Porcelain Veneers & Smile Makeovers",
    shortTitle: "Porcelain Veneers",
    category: "Cosmetic & Whitening",
    categoryBadge: "Smile Design",
    subtitle: "Thin custom porcelain shells to correct chipped, worn, gapped, or uneven front teeth naturally.",
    heroDesc: "Porcelain veneers are ultra-thin, custom-crafted ceramic facings bonded to the front of your teeth. They look, reflect light, and feel just like healthy natural enamel—creating a balanced, natural-looking smile without chalky artificial whiteness.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80",
    duration: "2 Visits over 1 to 2 Weeks",
    painLevel: "Painless (Local numbing)",
    healingTime: "Immediate normal eating",
    idealFor: [
      "Chipped, cracked, or worn front tooth edges from grinding",
      "Gaps or uneven spacing between front teeth",
      "Severe internal tooth staining that whitening cannot lift",
      "Irregularly shaped, short, or peg-shaped front teeth",
      "Wanting a durable, high-confidence smile makeover",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "3D Smile Consultation",
        desc: "We discuss your goals, take high-res digital scans, and design your new smile proportions on screen.",
      },
      {
        step: "02",
        title: "Conservative Prep & Temporary Preview",
        desc: "We minimally shape less than 0.5mm of enamel under local numbing and place a temporary preview smile.",
      },
      {
        step: "03",
        title: "Master Lab Crafting",
        desc: "Expert dental ceramists handcraft each porcelain veneer with natural translucency and texture.",
      },
      {
        step: "04",
        title: "Bonding & Final Reveal",
        desc: "We verify the fit and bite, and permanently bond the veneers to your teeth for a lifetime of confident smiles.",
      },
    ],
    benefits: [
      {
        title: "Natural Translucency",
        desc: "Reflects light just like real enamel—never flat, bulky, or fake looking.",
      },
      {
        title: "Stain Resistant",
        desc: "Porcelain is non-porous, meaning it resists stains from coffee, wine, and tea forever.",
      },
      {
        title: "Conservative Tooth Preservation",
        desc: "Only a micro-layer of enamel is shaped, leaving your natural tooth healthy underneath.",
      },
      {
        title: "15 to 20+ Year Lifespan",
        desc: "High-grade ceramic is exceptionally strong and endures daily life with normal care.",
      },
    ],
    mythsAndFacts: [
      {
        myth: "Veneers require grinding your real teeth down to tiny stubs.",
        fact: "That only happens with aggressive crowns overseas. Modern veneers require ultra-conservative shaping (0.3mm to 0.5mm) of the front enamel only.",
      },
      {
        myth: "Veneers look unnaturally white and fake.",
        fact: "We customize each shade to complement your skin tone and facial harmony, ensuring a radiant yet completely natural look.",
      },
      {
        myth: "Veneers pop off easily when eating apples.",
        fact: "Once bonded with modern dental adhesive, porcelain veneers become an integral part of your tooth and easily withstand normal eating.",
      },
    ],
    faqs: [
      {
        question: "How many veneers do most people get?",
        answer: "It depends on your smile width. Most patients choose 4, 6, or 8 veneers on the upper front teeth that show when they smile.",
      },
      {
        question: "How do I care for my porcelain veneers?",
        answer: "Treat them like real teeth! Brush twice daily with non-abrasive toothpaste, floss once daily, and wear a nightguard if you grind your teeth at night.",
      },
      {
        question: "Are porcelain veneers reversible?",
        answer: "Because a tiny micro-layer of enamel is contoured to ensure a flush fit, the procedure is permanent and will eventually need replacement after 15 to 20 years.",
      },
    ],
    relatedSlugs: ["teeth-straightening-aligners", "teeth-whitening", "crowns-and-bridges"],
  },
  {
    slug: "kids-dentistry",
    title: "Kids Dentistry (Pediatric Dental Care)",
    shortTitle: "Kids Dentistry",
    category: "Kids & Seniors",
    categoryBadge: "Pediatric Care",
    subtitle: "Gentle, friendly dental care for children, toddlers, and teens in a happy, fear-free environment.",
    heroDesc: "A positive first dental visit sets your child up for a lifetime of healthy smiles. Our pediatric team uses gentle touch, fun child-friendly explanations, and painless techniques so kids look forward to seeing the dentist instead of feeling scared.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
    duration: "Single Visit (20 to 30 mins)",
    painLevel: "Completely painless & gentle",
    healingTime: "Immediate",
    idealFor: [
      "First dental checkup (recommended by age 1 or when the first tooth appears)",
      "Milk teeth cavities or dark spots needing gentle fillings",
      "Cavity prevention through fluoride polish and dental sealants",
      "Thumb sucking or mouth breathing habit correction",
      "Dental injuries, chipped milk teeth, or school sports mouthguards",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Fun Welcome & Tell-Show-Do",
        desc: "We introduce the dental chair and instruments in a friendly way before touching any teeth.",
      },
      {
        step: "02",
        title: "Gentle Cleaning & Cavity Check",
        desc: "We gently polish the teeth and check for early decay or bite issues without any scary tools.",
      },
      {
        step: "03",
        title: "Fluoride Coating & Sealants",
        desc: "We apply a pleasant-tasting fluoride varnish or protective pit sealants to shield back molars from cavities.",
      },
      {
        step: "04",
        title: "Reward & Brushing Tips",
        desc: "Your child gets a fun reward badge and personalized tips to make brushing at home exciting.",
      },
    ],
    benefits: [
      {
        title: "Zero Dental Fear",
        desc: "Builds positive habits early so your child never suffers from dental anxiety as an adult.",
      },
      {
        title: "Stops Cavities Early",
        desc: "Dental sealants protect deep grooves in chewing molars where 80% of childhood cavities start.",
      },
      {
        title: "Protects Permanent Teeth",
        desc: "Keeping milk teeth healthy preserves the space needed for adult teeth to come in straight.",
      },
      {
        title: "Parent Guidance",
        desc: "Clear advice on diet, sweet snacks, milk bottle tooth decay, and proper brushing technique.",
      },
    ],
    mythsAndFacts: [
      {
        myth: "Milk teeth fall out anyway, so cavities in them don't matter.",
        fact: "Infected milk teeth cause severe pain, difficulty eating, and can damage the adult permanent teeth developing directly underneath in the jawbone.",
      },
      {
        myth: "Children don't need to visit a dentist until all their permanent teeth come in.",
        fact: "Pediatric associations recommend the first checkup around age 1 to prevent bottle decay and guide jaw growth.",
      },
      {
        myth: "Dental X-rays are dangerous for young children.",
        fact: "Modern digital dental X-rays have near-zero radiation (equivalent to the natural radiation from eating two bananas).",
      },
    ],
    faqs: [
      {
        question: "At what age should my child first see a dentist?",
        answer: "By age 1 or within 6 months of their first milk tooth erupting. This allows us to spot early feeding habits and prevent bottle decay.",
      },
      {
        question: "What are dental pit and fissure sealants?",
        answer: "Sealants are thin, painless protective plastic coatings painted onto the chewing grooves of back molars to block food and bacteria from causing cavities.",
      },
      {
        question: "What should I do if my child is terrified of dentists?",
        answer: "Let us know in advance! We use the 'Tell-Show-Do' approach, let kids touch the gentle instruments, and never force any treatment until the child feels completely safe.",
      },
    ],
    relatedSlugs: ["cavity-fillings", "teeth-cleaning-scaling", "teeth-straightening-aligners"],
  },
  {
    slug: "dentures",
    title: "Dentures (Complete & Partial)",
    shortTitle: "Dentures",
    category: "Kids & Seniors",
    categoryBadge: "Senior Care",
    subtitle: "Comfortable, lightweight complete and partial dentures to restore chewing and speaking ability.",
    heroDesc: "Missing multiple teeth makes chewing food difficult and causes facial skin to sag. Modern dentures are crafted from lightweight, gum-colored materials that fit securely, allowing elderly and adult patients to enjoy their favorite meals comfortably.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    duration: "3 to 4 Short Visits over 2 Weeks",
    painLevel: "Completely painless (Zero surgery needed for standard dentures)",
    healingTime: "1 to 2 weeks adjustment period",
    idealFor: [
      "Loss of all teeth in upper or lower jaw needing complete dentures",
      "Multiple missing back teeth where implants or fixed bridges aren't suitable",
      "Difficulty chewing lentils, rotis, fruits, or vegetables",
      "Sunken cheeks and lips caused by missing tooth support",
      "Replacing old, loose, or cracked dentures that pinch the gums",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Gentle Gum Impression",
        desc: "We take a comfortable impression of your gum ridges to capture exact jaw contours.",
      },
      {
        step: "02",
        title: "Bite Registration",
        desc: "We measure your natural lip position and chewing height to ensure a comfortable jaw position.",
      },
      {
        step: "03",
        title: "Wax Try-In Preview",
        desc: "You and your family preview the teeth in wax. You check the tooth size, shade, and smile in the mirror before final processing.",
      },
      {
        step: "04",
        title: "Final Fitting & Adjustment",
        desc: "The finished lightweight denture is placed, checked for smooth bite balance, and adjusted so there are no sore spots.",
      },
    ],
    benefits: [
      {
        title: "Eat Comfortably Again",
        desc: "Restores the ability to chew balanced meals and stay well-nourished.",
      },
      {
        title: "Youthful Facial Support",
        desc: "Fills out sunken lips and cheeks, taking years off facial appearance.",
      },
      {
        title: "Clearer Speech",
        desc: "Helps you pronounce words clearly without whistling or slurring.",
      },
      {
        title: "Affordable & Non-Surgical",
        desc: "A proven, cost-effective solution requiring zero surgical intervention.",
      },
    ],
    mythsAndFacts: [
      {
        myth: "Dentures look completely fake like plastic piano keys.",
        fact: "Modern BPS and acrylic dentures use multi-layered teeth with individual shade variations that look remarkably lifelike.",
      },
      {
        myth: "You must keep dentures in your mouth 24 hours a day.",
        fact: "Dentures should be taken out and kept in clean water at night so your gum tissues can rest and breathe.",
      },
      {
        myth: "Dentures last forever and never need replacement.",
        fact: "Because jawbone naturally shrinks over the years, dentures need to be relined or replaced every 5 to 7 years to keep a snug fit.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between complete and partial dentures?",
        answer: "A complete denture replaces all teeth in a jaw. A partial denture fills gaps when some natural teeth remain, clasping gently around healthy teeth for extra grip.",
      },
      {
        question: "Can dentures be supported by implants?",
        answer: "Yes! Implant-supported overdentures snap securely onto 2 or 4 mini-implants, meaning zero slipping, zero pastes, and 100% rock-solid chewing.",
      },
      {
        question: "How long does it take to get used to new dentures?",
        answer: "Most patients adapt within 1 to 2 weeks. Reading aloud and starting with soft foods helps your tongue and cheek muscles learn quickly.",
      },
    ],
    relatedSlugs: ["dental-implants", "crowns-and-bridges", "teeth-cleaning-scaling"],
  },
  {
    slug: "emergency-dental-care",
    title: "Emergency Dental Relief",
    shortTitle: "Emergency Dental",
    category: "Emergency",
    categoryBadge: "Same-Day Urgent",
    subtitle: "Same-day immediate pain relief for severe toothaches, broken teeth, bleeding, or lost fillings.",
    heroDesc: "Dental emergencies don't wait for office hours. If you are experiencing sudden unbearable toothache, facial swelling, a knocked-out tooth, or a broken tooth from an accident, call us directly. We reserve emergency slots every single day to get you out of pain immediately.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    duration: "Same-Day Visit (Immediate Priority)",
    painLevel: "Instant relief through gentle local numbing",
    healingTime: "Immediate relief from acute pain",
    idealFor: [
      "Unbearable, throbbing toothache that painkiller tablets cannot stop",
      "Sudden swelling in your cheek, jaw, or gums with fever",
      "Tooth knocked out or loosened in a sports accident or fall",
      "Broken, chipped, or cracked front tooth with exposed nerve",
      "Lost crown, broken filling, or sharp edge cutting your tongue",
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Immediate Triage & Digital X-Ray",
        desc: "You are seated immediately without waiting. We take a targeted low-dose digital X-ray to pinpoint the exact issue.",
      },
      {
        step: "02",
        title: "Instant Pain Relief",
        desc: "We administer rapid, gentle local numbing to turn off the pain receptor within 2 minutes.",
      },
      {
        step: "03",
        title: "Emergency Treatment",
        desc: "Depending on the problem, we drain an abscess, place an emergency soothing dressing, or initiate a gentle root canal.",
      },
      {
        step: "04",
        title: "Long-Term Plan & Prescription",
        desc: "We prescribe antibiotics and painkillers if needed, and outline any final permanent restoration at your convenience.",
      },
    ],
    benefits: [
      {
        title: "Same-Day Priority Slots",
        desc: "We reserve open appointments every day specifically for acute dental emergencies.",
      },
      {
        title: "Rapid Pain Elimination",
        desc: "Our primary goal is relieving your throbbing pain the moment you sit in the chair.",
      },
      {
        title: "Saves Knocked-Out Teeth",
        desc: "If a knocked-out tooth is brought to us within 60 minutes, we can often replant it successfully.",
      },
      {
        title: "Prevents Severe Infection Spread",
        desc: "Untreated tooth infections can spread to the jaw and neck. Early treatment stops complications.",
      },
    ],
    mythsAndFacts: [
      {
        myth: "Placing an aspirin tablet directly on the painful gum helps toothache.",
        fact: "NEVER do this! Aspirin is an acid that burns your gum tissue severely, causing painful chemical burns. Swallow the tablet with water instead.",
      },
      {
        myth: "If a knocked-out tooth is dirty, scrub it clean with soap.",
        fact: "Never scrub the root! Rinse it gently in milk or saline without touching the root, and bring it to our clinic immediately.",
      },
      {
        myth: "Dental pain will just go away if you wait long enough.",
        fact: "Tooth infections do not heal on their own without dental treatment. Waiting only makes the infection larger and more costly to fix.",
      },
    ],
    faqs: [
      {
        question: "What should I do if a tooth gets completely knocked out?",
        answer: "Pick up the tooth by the white crown only (never touch the root). Rinse gently in cold milk, place it in a cup of milk, and come to our clinic within 30 to 60 minutes.",
      },
      {
        question: "Can I walk in without an appointment for an emergency?",
        answer: "Yes, or call us at (555) 888-3368 on your way so our team can prepare the treatment room before you arrive.",
      },
      {
        question: "What should I do for a sudden toothache at night?",
        answer: "Take an over-the-counter pain reliever, rinse with warm salt water, elevate your head with two pillows to reduce throbbing pressure, and call us first thing in the morning.",
      },
    ],
    relatedSlugs: ["root-canal-treatment", "wisdom-tooth-removal", "cavity-fillings"],
  },
];

export function getServiceBySlug(slug: string): DentalService | undefined {
  return DENTAL_SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return DENTAL_SERVICES.map((s) => s.slug);
}
