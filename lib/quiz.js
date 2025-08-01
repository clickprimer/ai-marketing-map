const quiz = [
  {
    category: "Branding",
    question: "How dialed-in is your visual brand? Is it easy to spot and trust at a glance—on trucks, cards, websites, and social media?",
    options: [
      { label: "A", text: "Our brand is sharp, consistent, and memorable across all platforms." },
      { label: "B", text: "We have a basic logo and colors, but it's not consistently used everywhere." },
      { label: "C", text: "It’s pretty generic or outdated, and not very recognizable or trustworthy." }
    ]
  },
  {
    category: "Local Visibility",
    question: "When someone searches for your service locally, how visible are you on Google, directories, and social media?",
    options: [
      { label: "A", text: "We rank high in Google, have a strong GBP, accurate listings, and active socials." },
      { label: "B", text: "We're listed and findable but don't consistently show up near the top." },
      { label: "C", text: "We're hard to find online unless someone already knows our name." }
    ]
  },
  {
    category: "Lead Capture & Response",
    question: "How well do you capture leads and respond quickly—ideally within minutes—to new inquiries?",
    options: [
      { label: "A", text: "We have one system that works reliably and we respond fast—often instantly." },
      { label: "B", text: "We usually respond within a day, but things sometimes slip through the cracks." },
      { label: "C", text: "We miss a lot of leads or forget to follow up until it's too late." }
    ]
  },
  {
    category: "Lead Quality & Filtering",
    question: "How qualified are the leads you're getting, and do you have a system to sort or filter out bad fits?",
    options: [
      { label: "A", text: "Most of our leads are serious and a good fit—we’ve got filters in place." },
      { label: "B", text: "We get a mix of solid leads and tire-kickers, no real filter system in place." },
      { label: "C", text: "Lots of price shoppers or totally unqualified leads waste our time." }
    ]
  },
  {
    category: "Past Client Nurture & Referrals",
    question: "How often do you stay in touch with past clients? Do you have automated campaigns for seasonal updates or offers, or a referral program?",
    options: [
      { label: "A", text: "We have campaigns running and get steady reviews, referrals, and repeat jobs." },
      { label: "B", text: "We get some repeat work and referrals, but it's not consistent or automated." },
      { label: "C", text: "We rarely follow up after a job is done and don’t get many referrals." }
    ]
  },
  {
    category: "Website & Web Presence",
    question: "How strong is your overall web presence—including whether you own your site, your SEO, and your digital reputation?",
    options: [
      { label: "A", text: "We own our website, it’s SEO-optimized, runs fast, and ranks well." },
      { label: "B", text: "We have a decent website but rent it monthly and it doesn’t perform consistently well." },
      { label: "C", text: "Our website is outdated, missing, or doesn’t represent us well online." }
    ]
  },
  {
    category: "Reviews & Reputation",
    question: "How strong is your reputation online? Are you getting consistent new reviews, and are you managing your reputation?",
    options: [
      { label: "A", text: "We consistently get 5-star reviews and have a system to manage and reply." },
      { label: "B", text: "We have some reviews, but they’re old or we’re not getting them regularly." },
      { label: "C", text: "We have very few reviews, outdated ones, or even some bad ones we’ve ignored." }
    ]
  },
  {
    category: "Social Media Presence",
    question: "How often are you posting updates or project photos to Google, Facebook, Instagram, or other platforms?",
    options: [
      { label: "A", text: "We post regularly with photos, updates, and job site proof—we look active." },
      { label: "B", text: "We post here and there, mostly when we remember or get new photos." },
      { label: "C", text: "We rarely or never post anything to social media or our Google profile." }
    ]
  },
  {
    category: "Team & Operations",
    question: "How well does your team handle incoming leads, job tracking, scheduling, and follow-up?",
    options: [
      { label: "A", text: "We’ve got systems that keep the whole crew on task with smooth communication." },
      { label: "B", text: "It mostly works, but we still have dropped balls or double-booked jobs." },
      { label: "C", text: "It’s a bit chaotic—info gets lost, jobs get missed, or customers fall through the cracks." }
    ]
  },
  {
    category: "Growth Plans & Ads",
    question: "Do you have a plan to grow—like booking out in advance, boosting profits, or running ads that actually work?",
    options: [
      { label: "A", text: "Yes—we’ve got a roadmap and we’re running profitable ads or marketing strategies." },
      { label: "B", text: "We want to grow but don’t really have a plan or system that’s working yet." },
      { label: "C", text: "We're busy but stuck—no time to grow or test new marketing without dropping the ball." }
    ]
  },
  {
    category: "Final Question",
    question: "Would you rather run the show and build your own system, or have experts set it all up for you so you can just show up and work?",
    options: [
      { label: "A", text: "I’m hands-on and like to manage my own system once it’s in place." },
      { label: "B", text: "I’d rather let experts handle the tech stuff and focus on doing great work." },
      { label: "C", text: "Honestly, I just want more leads and less stress—whatever gets me there fast." }
    ]
  }
];

export default quiz;

// Final instruction for system to trigger CTA rendering
// <!-- TRIGGER:CTA -->
