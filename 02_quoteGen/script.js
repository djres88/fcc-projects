$(document).ready(function() {
  var quotesList = [
    // {
    //  quote: "That's one of the nice things. I mean, part of the beauty of me is that I'm very rich. So if I need $600 million, I can put $600 million myself. That's a huge advantage. I must tell you, that's a huge advantage over the other candidates.",
    //  speaker: "Donald Trump",
    //  topic: "Welfare & Poverty"
    // },
    // {
    //  quote: "We are in state of emergency; not state of recovery. (Jan 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Budget & Economy"
    // },
    // {
    //  quote: "No discrimination based on orientation whether it's LGB or T. (Jul 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Civil Rights"
    // },
    // {
    //  quote: "\"Religious Freedom\" is surrogate for patriarchal domination. (Jul 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Civil Rights"
    // },
    // {
    //  quote: "After marriage equality comes workplace equality. (Jul 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Civil Rights"
    // },
    // {
    //  quote: "Privatization is an enormous step backwards. (Jul 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Corporations"
    // },
    // {
    //  quote: "Break up \"too-big-to-fail\" banks. (Jun 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Corporations"
    // },
    // {
    //  quote: "Hillary is the Wal-Mart candidate. (Jun 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Corporations"
    // },
    // {
    //  quote: "Black Lives Matter: end racism & police militarization. (Feb 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Drugs"
    // },
    // {
    //  quote: "End the racist war on drugs and school-to-prison pipeline. (Feb 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Drugs"
    // },
    // {
    //  quote: "Common Core empowers contractors over teachers. (Jul 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Education"
    // },
    // {
    //  quote: "Charter schools assault the treasure of our public schools. (Jul 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Education"
    // },
    // {
    //  quote: "End high stakes testing. (Jun 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Education"
    // },
    // {
    //  quote: "Completely zero out climate emissions, as fast as possible. (Jun 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Energy & Oil"
    // },
    // {
    //  quote: "Make wars for oil obsolete: 100% renewables by 2030. (Feb 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Energy & Oil"
    // },
    // {
    //  quote: "Moratorium on GMOs until they are proven safe. (Jun 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Environment"
    // },
    // {
    //  quote: "Kids in poverty can't go to school in condition to learn. (Jul 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Families & Children"
    // },
    // {
    //  quote: "Don't assume that mothers should always get custody. (Jul 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Families & Children"
    // },
    // {
    //  quote: "Work towards neutral Ukraine; don't arm them against Russia. (Jul 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Foreign Policy"
    // },
    // {
    //  quote: "Lifting the Cuban embargo was long overdue. (Jul 2015)",
    //  speaker: "Jill Stein",
    //  topic: ""
    // },
    // {
    //  quote: "Expanding NATO threatens Russia and breaks our promise. (Jul 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Foreign Policy"
    // },
    // {
    //  quote: "Focus on human rights, international law, and diplomacy. (Jul 2015)",
    //  speaker: "Jill Stein",
    //  topic: "Foreign Policy"
    // },
    // {
    //  quote: "The Confederate flag is a terrible symbol of white supremacy and slavery. It should be removed from all public locations. But this is only a symbol. We need to go deeper to erase the institutional racism that lives on post-slavery... (Jul 2015)",
    //  speaker: "Jill Stein",
    //  topic: ""
    // },
    // {
    //  quote: "No corporate nor lobbyist donations; just small donors. (Jun 2015)",
    //  speaker: "Jill Stein",
    //  topic: ""
    // },
    // {
    //  quote: "Empower the People: Abolish corporate personhood. Protect voters' rights by establishing a constitutional right to vote. Enact electoral reforms that break the big money stranglehold and create truly representative democracy: public campaign financing, ranked-choice voting, proportional representation, and open debates.",
    //  speaker: "Jill Stein",
    //  topic: ""
    // },
    // {
    //  quote: "The Green New Deal virtually pays for itself just in terms of the health savings alone because what injures the health of the climate also injures human health.",
    //  speaker: "Jill Stein",
    //  topic: "Health Care"
    // },
    // {
    //  quote: "",
    //  speaker: "Jill Stein",
    //  topic: ""
    // },
    // {
    //  quote: "",
    //  speaker: "Jill Stein",
    //  topic: ""
    // },
    // {
    //  quote: "",
    //  speaker: "Jill Stein",
    //  topic: ""
    // },
    // {
    //  quote: "",
    //  speaker: "Jill Stein",
    //  topic: ""
    // },
    // {
    //  quote: "",
    //  speaker: "Jill Stein",
    //  topic: ""
    // },
    // {
    //  quote: "",
    //  speaker: "Jill Stein",
    //  topic: ""
    // },
    // {
    //  quote: "",
    //  speaker: "Jill Stein",
    //  topic: ""
    // },
    // {
    //  quote: "",
    //  speaker: "Jill Stein",
    //  topic: ""
    // },
    // {
    //  quote: "",
    //  speaker: "Jill Stein",
    //  topic: ""
    // },
    {
     quote: "Just because you're a politician doesn't mean you're not a thinking human being. You gather information, you think through positions, you're not 100% set, thank goodness, you\'re constantly re-evaluating where you stand. That is true for me. One of my big problems right now is that too many people believe they have a direct line to the divine and they never want to change their mind about anything",
     speaker: "Hillary Clinton",
     topic: "Voting Record"
    },
    {
     quote: "I wouldn't raise [the capital gains tax, currently at 15%] above the 20% if I raised it at all. I would not raise it above what it was during the Clinton administration",
     speaker: "Hillary Clinton",
     topic: "Corporations"
    },
    {
     quote: "We have allowed our criminal justice system to get out of balance, and I hope that the tragedies of the last year give us the opportunity to come together as a nation to find our balance again. We can stand up together and say: Yes, black lives matter. Yes, the government should serve and protect all of our people. Yes, our country is strongest when everyone has a fair shot at the American Dream. Inequality is not inevitable.",
     speaker: "Hillary Clinton",
     topic: "Civil Rights"
    },
    {
     quote: "On recreational, you know, states are the laboratories of democracy... We have at least two states that are experimenting with [legalizing medical marijuana] right now. I want to wait and see what the evidence is.",
     speaker: "Hillary Clinton",
     topic: "Drugs",
     source: "Beth Reinhard in Wall Street Journal, \"Third Way\" , Jun 14, 2014"
    },
    {
     quote: "I told the crowd that the US was prepared to lead a collective effort by developed countries to mobilize $100 billion annually by 2020 from a combination of public and private sources to help the poorest and most vulnerable nations mitigate the damage from climate change--if we could also reach a broad agreement on limiting emissions.",
     speaker: "Hillary Clinton",
     topic: "Energy & Oil",
     source: "Hard Choices, by Hillary Clinton, p.498-500 , Jun 10, 2014"
    },
    {
     quote: "Nonetheless, it is an unfortunate reality that women in public life still face an unfair double standard. Even leaders like former Prime Minister Julia Gillard of Australia have faced outrageous sexism, which shouldn't be tolerated in any country.",
     speaker: "Hillary Clinton",
     topic: "Civil Rights",
     source: "Hard Choices, by Hillary Clinton, p. 50 , Jun 10, 2014"
    },
    {
     quote: "No one should have any illusions about the gravity of the security threats America faces, and as Secretary I had no higher responsibility than to protect our citizens and our country. But at the same time, upholding universal values and human rights is at the core of what it means to be American. If we sacrifice those values or let our policies diverge too far from our ideals, our influence will wane.",
     speaker: "Hillary Clinton",
     topic: "Foreign Policy",
     source: "Hard Choices, by Hillary Clinton, p.566 , Jun 10, 2014"
    },
    {
     quote: "To succeed in the 21st century, we need to integrate the traditional tools of foreign policy--diplomacy, development assistance, and military force--while also tapping the energy and ideas of the private sector and empowering citizens, especially the activists, organizers, and problem solvers we call civil society, to meet their own challenges and shape their own futures. We have to use all of America's strengths to build a world with more partners and fewer adversaries, more shared responsibility and fewer conflicts, more good jobs and less poverty, more broadly based prosperity with less damage to our environment.",
     speaker: "Hillary Clinton",
     topic: "Foreign Policy",
     source: "Hard Choices, by Hillary Clinton, pre-release excerpts , May 25, 2014"
    },
    {
     quote: "Any trade deal has to produce jobs and raise wages and increase prosperity and protect our security. We have to do our part in making sure we have the capabilities and the skills to be competitive. It's got to be really a partnership between our business, our government, our workforce, the intellectual property that comes out of our universities, and we have to get back to a much more focused effort in my opinion to try to produce those capacities here at home so that we can be competitive in a global economy.",
     speaker: "Hillary Clinton",
     topic: "Free Trade",
     source: "National Journal 2015 coverage of 2016 presidential hopefuls , Apr 27, 2015"
    },
    {
     quote: "America worked to create a global economy. The current global trading system is distorted not only by barriers to entry in developing and emerging economies, but by the power of special interests in developed countries, including the US.",
     speaker: "Hillary Clinton",
     topic: "Free Trade",
     source: "Hard Choices, by Hillary Clinton, p.509 , Jun 10, 2014"
    },
    {
     quote: "I would consider supporting an amendment among these lines that would prevent the abuse of our political system by excessive amounts of money if there is no other way to deal with the Citizen's United decision",
     speaker: "Hillary Clinton",
     topic: "Government Reform",
     source: "Alex Seitz-Wald on MSNBC, \"Citizens United\" , Jul 21, 2014"
    },
    {
     quote: "We've got to rein in what has become an almost article of faith that anybody can have a gun anywhere, anytime... I don't believe that is in the best interest of the vast majority of people",
     speaker: "Hillary Clinton",
     topic: "Gun Control",
     source: "Wall Street Journal, "Anywhere, Anytime Gun Culture" , May 6, 2014"
    },
    {
     quote: "The science is clear: The earth is round, the sky is blue, and vaccines work.",
     speaker: "Hillary Clinton",
     topic: "Health Care",
     source: "N. Y. Times 2015 coverage of 2016 presidential hopefuls , Feb 3, 2015"
    },
    {
     quote: "I believe that our government must do so much more to get generic drugs and low-cost drugs to people suffering. Not only from HIV/AIDS, but the range of diseases that affect disproportionately the poor... We need to do much more to get our pharmaceutical companies to work with us to get the drug costs down and to open the pathway for generic drugs.",
     speaker: "Hillary Clinton",
     topic: "Health Care",
     source: "2008 Democratic Compassion Forum at Messiah College , Apr 13, 2008"
    },
    {
     quote: "[Obamacare is too important to] turn the clock back. [But] we have to do a better job than has been done, quite frankly, in explaining the benefits.",
     speaker: "Hillary Clinton",
     topic: "Health Care",
     source: "David Nather on Politico.com, "Obamacare too important" , Mar 5, 2014"
    },
    {
     quote: "For every dollar spent by the federal government, just one penny went to diplomacy and development. [Defense Secretary Bob Gates] said the foreign affairs budget was \"disproportionately small relative to what we spend on the military.\" There were as many Americans serving in military marching bands as in the diplomatic corps. We became allies, tag-teaming Congress for a smarter national security budget.",
     speaker: "Hillary Clinton",
     topic: "Homeland Security",
     source: "Hard Choices, by Hillary Clinton, p. 24 , Jun 10, 2014"
    },
    {
     quote: "In 2009, more than 55 million Americans were immigrants or the children of immigrants. These first- or second-generation Americans were valuable links back tot heir home countries and also significant contributors to our own country's economic, cultural, and political life. Immigration helped keep the US population young and dynamic at a time when many of our partners and competitors were aging.",
     speaker: "Hillary Clinton",
     topic: "Immigration",
     source: "Hard Choices, by Hillary Clinton, p.550 , Jun 10, 2014"
    },
    {
     quote: "I am absolutely committed to not raising a single tax on middle class Americans, people making less than $250,000 a year. In fact, I have a very specific plan of $100 billion in tax cuts.",
     speaker: "Hillary Clinton",
     topic: "Taxes",
     source: "2008 Philadelphia primary debate, on eve of PA primary , Apr 16, 2008"
    },
    {
     quote: "There were other ways that Mr. Snowden could have expressed his concerns... I think everyone would have applauded that because it would have added to the debate that was already started. Instead, he left the country, taking with him a huge amount of sensitive information.",
     speaker: "Hillary Clinton",
     topic: "Homeland Security",
     source: "Megan R. Wilson in TheHill.com weblog, \"Clinton vs. Warren\", Aug 24, 2014"
    },
    {
     quote: "Many Senators came to wish they had voted against the resolution [authorizing the Iraq War in 2002]. I was one of them. As the war dragged on, with every letter I sent to a family in New York who had lost a son or daughter, a father or mother, my mistake became more painful.",
     speaker: "Hillary Clinton",
     topic: "Iraq War",
     source: "Hard Choices, by Hillary Clinton, CBS pre-release excerpts , Jun 6, 2014"
    },
    {
     quote: "We are not returning to the days of back-room abortions, when countless women died or were maimed. The decision about abortion must remain a decision for the woman, her family and physician to make, not the government",
     speaker: "Bernie Sanders",
     topic: "Abortion"
     source: "2016 presidential campaign website FeelTheBern.org, \"Issues\" , Sep 5, 2015"
    },
    {
     quote: "Millionaires and billionaires are pouring unbelievable sums of money into the political process in order to fund super PACs and to elect candidates who represent their interests, not the interests of working people. What this campaign is about is whether we can mobilize our people to take back our government from a handful of billionaires and create the vibrant democracy we know we can and should have.",
     speaker: "Bernie Sanders",
     topic: "Government Reform",
     source: "2015 CNN Democratic primary debate in Las Vegas , Oct 13, 2015"
    },
    {
     quote: "It is immoral and wrong that the top 1/10 of 1% in this country own almost 90 percent--almost--own almost as much wealth as the bottom 90 percent. That it is wrong, today, in a rigged economy, that 57% of all new income is going to the top 1%.",
     speaker: "Bernie Sanders",
     topic: "Budget & Economy",
     source: "2015 CNN Democratic primary debate in Las Vegas , Oct 13, 2015"
    },
    {
     quote: "We've got to end LGBT discrimination in the workplace. Vermont did this 22 years ago when it passed one of the first state laws in the country protecting lesbian and gay workers. Congress should have acted long ago, House Republicans won't even allow a vote on the Employment Non-Discrimination Act [ENDA] that the Senate passed last year. That's why Pres. Obama's executive order is an important step in the right direction.",
     speaker: "Bernie Sanders",
     topic: "Civil Rights",
     source: "2016 presidential campaign website FeelTheBern.org, \"Issues\", Sep 5, 2015"
    },
    {
     quote: "I believe that we have to deal with this issue of institutional racism. But we have to deal with the reality that 50% of young black kids are unemployed. That we have massive poverty in the America, in our country, and we an unsustainable level of income and wealth inequality.",
     speaker: "Bernie Sanders",
     topic: "Civil Rights",
     source: "Meet the Press 2015 interviews of 2016 presidential hopefuls , Jul 26, 2015"
    },
    {
     quote: "If you have seen a massive transfer of wealth from the middle class to the top 1/10 of 1%, you know what, we've got to transfer that back if we're going to have a vibrant middle class. And you do that in a lot of ways. Certainly one way is tax policy.",
     speaker: "Bernie Sanders",
     topic: "Taxes",
     source: "2016 presidential campaign website FeelTheBern.org, \"Issues\" , Sep 5, 2015"
    },
    {
     quote: "I think that the business model of Wall Street is fraud. And I think these guys drove us into the worst economic downturn into the modern history of America. I think they're at it again. I believe that, when you have so few banks with so much power, you have to not only reestablish Glass-Steagall, but you have got to break them up.",
     speaker: "Bernie Sanders",
     topic: "Corporations",
     source: "CNN SOTU 2015 interview series: 2016 presidential hopefuls , Aug 30, 2015"
    },
    {
     quote: "I think what the pope has been saying in a very profound and deep way is that casino-type capitalism is causing devastating problems not only in terms of our climate but in terms of income and wealth inequality. The pope is saying there's something wrong internationally where almost all of the new wealth in this world is going to people on the top and so many other people are falling by the wayside.",
     speaker: "Bernie Sanders",
     topic: "Economy",
     source: "CBS Face the Nation 2015 coverage:2016 presidential hopefuls , Jul 12, 2015"
    },
    {
     quote: "Financial institutions cannot be an island unto themselves, standing as huge profit centers outside of the real economy. Today, six huge Wall Street financial institutions have assets equivalent to 61 percent of our gross domestic product--over $9.8 trillion... They are too powerful to be reformed. They must be broken up.",
     speaker: "Bernie Sanders",
     topic: "Corporations",
     source: "2016 presidential campaign website, BernieSanders.com , Mar 21, 2015"
    },
    {
     quote: "Isn't the justice system meant to protect all citizens? It should. But while black people make up only 13% of the population, they account for 31% of all victims killed by police. Blacks make up nearly 40% of unarmed individuals killed by police with a gun and 42% of unarmed individuals that are killed by police by means other than a gun. (And remember: statistics on police shootings are self-reported, so this data probably underestimates this depressing state of affairs",
     speaker: "Bernie Sanders",
     topic: "Crime",
     source: "2016 presidential campaign website FeelTheBern.org, "Issues" , Sep 5, 2015"
    },
    {
     quote: "I voted against NCLB in 2001, and continue to oppose the bill's reliance on high-stakes standardized testing to direct draconian interventions. In my view, NCLB ignores several important factors in a student's academic performance, specifically the impact of poverty, access to adequate health care, mental health, and nutrition. By placing so much emphasis on standardized testing, NCLB ignores many of the skills and qualities that are vitally important in our 21st century economy, like problem solving, critical thinking, and teamwork, in favor of test preparation that provides no benefit to students after they leave school.",
     speaker: "Bernie Sanders",
     topic: "Education",
     source: "2016 presidential campaign website FeelTheBern.org, \"Issues\" , Sep 5, 2015"
    },
    {
     quote: "Today's borrowers should be able to refinance their student loans at much lower interest rates. This will allow millions of people to pay off their debt sooner, and have more money to buy a car, buy a house, or invest in their own children's future education.",
     speaker: "Bernie Sanders",
     topic: "Education",
     source: "Forbes Magazine on 2016 hopefuls: 2015 speech at U. Iowa , Apr 30, 2015"
    },
    {
     quote: "The scientific community is telling us that if we do not address the global crisis of climate change, transform our energy system away from fossil fuel to sustainable energy, the planet that we're going to be leaving our kids and our grandchildren may well not be habitable. That is a major crisis.",
     speaker: "Bernie Sanders",
     topic: "Energy & Oil",
     source: "2015 CNN Democratic primary debate in Las Vegas , Oct 13, 2015"
    },
    {
     quote: "We have a major political party which is rejecting what the majority of the scientific community is saying.",
     speaker: "Bernie Sanders",
     topic: "Energy & Oil",
     source: "2016 presidential campaign website FeelTheBern.org, \"Issues\" , Sep 5, 2015"
    },
    {
     quote: "Every other major country on Earth, every one, including some small countries, say that when a mother has a baby, she should stay home with that baby. We are the only major country [where that is not the case].",
     speaker: "Bernie Sanders",
     topic: "Families & Children",
     source: "2015 CNN Democratic primary debate in Las Vegas , Oct 13, 2015"
    },
    {
     quote: "What I do believe is that Europe, the United States and, by the way, countries like Saudi Arabia, the United Arab Emirates, must address this humanitarian crisis. People are leaving Iraq, they're leaving Syria with just the clothes on their backs. The world has got to respond. The United States should be part of that response.",
     speaker: "Bernie Sanders",
     topic: "Foreign Policy",
     source: "Meet the Press 2015 interviews of 2016 presidential hopefuls , Sep 13, 2015"
    },
    {
     quote: " It's so easy to be critical of an agreement which is not perfect. But the US has to negotiate with other countries. We have to negotiate with Iran. And the alternative, you know what it is? It's war. Do we really want another war, a war with Iran? I think we go as far as we possibly can in trying to give peace a chance, if you like, trying to see if this agreement will work. And I will support it.",
     speaker: "Bernie Sanders",
     topic: "Foreign Policy",
     source: "CBS Face the Nation 2015 coverage:2016 presidential hopefuls , Aug 9, 2015"
    },
    {
     quote: "I'm not saying trade is the only reason, but it is a significant reason why Americans are working longer hours for low wages and why we are seeing our jobs go to China and other low-wage countries. And, finally, what you're seeing in Congress are Democrats and some Republicans beginning to stand up and say, maybe we should have a trade policy which represents the working families of this country, that rebuilds our manufacturing base, not than just representing the CEOs of large multinational corporations.",
     speaker: "Bernie Sanders",
     topic: "Free Trade",
     source: "CBS Face the Nation 2015 coverage:2016 presidential hopefuls , Jun 14, 2015"
    },
    {
     quote: "We are moving rapidly away from our democratic heritage into an oligarchic form of society where today we are experiencing a government of the billionaires, by the billionaires, and for the billionaires.",
     speaker: "Bernie Sanders",
     topic: "Government Reform",
     source: "2016 presidential campaign website FeelTheBern.org, \"Issues\" , Sep 5, 2015"
    },
    {
     quote: "The Koch brothers are going to spend $400 million. Do you know what their agenda is? They want to end Social Security, Medicare, Medicaid. More tax breaks for the rich and large corporations. Nobody in America wants that except the billionaire class. This is a real danger to American democracy.",
     speaker: "Bernie Sanders",
     topic: "Government Reform",
     source: "Meet the Press 2014 interviews of 2016 presidential hopefuls , Sep 14, 2014"
    },
    {
     quote: "I come from a state that has virtually no gun control. But the people of my state understand, I think, pretty clearly, that guns in Vermont are not the same thing as guns in Chicago or guns in Los Angeles. In our state, guns are used for hunting. In Chicago, they're used for kids in gangs killing other kids or people shooting at police officers, shooting down innocent people. We need a sensible debate about gun control which overcomes the cultural divide that exists in this country. And I think I can play an important role in this.",
     speaker: "Bernie Sanders",
     topic: "Gun Control",
     source: "CNN SOTU 2015 interview series: 2016 presidential hopefuls , Jul 5, 2015"
    },
    {
     quote: "There are thousands of people in this country today who are suicidal, who are homicidal, but can't get the healthcare that they need, the mental healthcare, because they don't have insurance or they're too poor.",
     speaker: "Bernie Sanders",
     topic: "Health Care",
     source: "2015 CNN Democratic primary debate in Las Vegas , Oct 13, 2015"
    },
    {
     quote: "The U.S. remains the only major country on earth that doesn't guarantee health care to all of our people. And yet we are spending almost twice as much per capita. We have a massively dysfunctional health care system. And I do believe in a Medicare-for-all single-payer system, whether a small state like Vermont can lead the nation, which I certainly hope we will, or whether it's California or some other state. At the end of the day, we need a cost-effective, high-quality health care system, guaranteeing health care to all of our people as a right."
     speaker: "Bernie Sanders",
     topic: "Health Care",
     source: "Fox News Sunday 2015 coverage of 2016 presidential hopefuls , Apr 19, 2015"
   },
   {
    quote: "When I was a young man, I strongly opposed the war in Vietnam. Not the brave men like Jim [Webb] who fought in that war, but the policy which got us involved in that war. That was my view then. I am not a pacifist. I supported the war in Afghanistan. I supported President Clinton's effort to deal with ethnic cleansing in Kosovo. I support air strikes in Syria and what the president is trying to do. Yes, I happen to believe from the bottom of my heart that war should be the last resort that we have got to exercise diplomacy. But yes, I am prepared to take this country into war if that is necessary."
    speaker: "Bernie Sanders",
    topic: "Homeland Security",
    source: "2015 CNN Democratic primary debate in Las Vegas , Oct 13, 2015"
   },
   {
    quote: "Well, what exists right now is that virtually every telephone call in this country ends up in a file at the NSA... [But] If we are a free country, we have the right to be free. Yes, we have to defend ourselves against terrorism, but there are ways to do that without impinging on our constitutional rights and our privacy rights."
    speaker: "Bernie Sanders",
    topic: "Homeland Security",
    source: "2015 CNN Democratic primary debate in Las Vegas , Oct 13, 2015"
   },
   {
    quote: "The truth is that for the last 40 years, the great middle class of this country has been disappearing. And in my view what we need to do is create millions of jobs by rebuilding our crumbling infrastructure; raise the minimum wage to $15 an hour; pay equity for women workers; and our disastrous trade policies, which have cost us millions of jobs; and make every public college and university in this country tuition free."
    speaker: "Bernie Sanders",
    topic: "Jobs",
    source: "2015 CNN Democratic primary debate in Las Vegas , Oct 13, 2015"
   },
   {
    quote: "What I mean is that we need to have one of the larger voter turnouts in the world, not one of the lowest. We need to raise public consciousness. We need the American people to know what's going on in Washington in a way that today they do not know."
    speaker: "Bernie Sanders",
    topic: "Government Reform",
    source: "2015 CNN Democratic primary debate in Las Vegas , Oct 13, 2015"
   },
   {
    quote: "When you have millions of seniors in this country trying to get by--and I don't know how they do on $13,000 a year--you don't cut Social Security, you expand it. And the way you expand it is by lifting the cap on taxable incomes so that you do away with the absurdity of a millionaire paying the same amount into the system as somebody making $118,000."
    speaker: "Bernie Sanders",
    topic: "Social Security",
    source: "2015 CNN Democratic primary debate in Las Vegas , Oct 13, 2015"
   },
   {
    quote: "I will do everything that I can to make sure that the U.S. does not get involved in another quagmire like we did in Iraq, the worst foreign policy blunder in the history of this country. We should be putting together a coalition of Arab countries who should be leading the effort. We should be supportive, but I do not support American ground troops in Syria."
    speaker: "Bernie Sanders",
    topic: "War & Peace",
    source: "2015 CNN Democratic primary debate in Las Vegas , Oct 13, 2015"
   },
   {
    quote: "I've evolved on many issues over the years. And you know who else has? Is Ronald Reagan evolved on many issues. And I am pro-life."
    speaker: "Donald Trump",
    topic: "Abortion",
    source: "Fox News/Facebook Top Ten First Tier debate transcript , Aug 6, 2015"
   },
   {
    quote: ""
    speaker: "Donald Trump",
    topic: "",
    source: ""
   },
   {
    quote: ""
    speaker: "Donald Trump",
    topic: "",
    source: ""
   },
   {
    quote: ""
    speaker: "Donald Trump",
    topic: "",
    source: ""
   },
   {
    quote: ""
    speaker: "Donald Trump",
    topic: "",
    source: ""
   },
   {
    quote: ""
    speaker: "Donald Trump",
    topic: "",
    source: ""
   },
   {
    quote: ""
    speaker: "Donald Trump",
    topic: "",
    source: ""
   },
   {
    quote: ""
    speaker: "Donald Trump",
    topic: "",
    source: ""
   },
   {
    quote: ""
    speaker: "Donald Trump",
    topic: "",
    source: ""
   },
   {
    quote: ""
    speaker: "Donald Trump",
    topic: "",
    source: ""
   },
   {
    quote: ""
    speaker: "Donald Trump",
    topic: "",
    source: ""
   },
   {
    quote: ""
    speaker: "Donald Trump",
    topic: "",
    source: ""
   },
  ];
 $("#newQuote").click(function() {
   var quoteIndex = Math.floor(Math.random()*quotesList.length);
   var myQuote = quotesList[quoteIndex].quote;
   var mySpeaker = quotesList[quoteIndex].speaker;
   var myTopic = quotesList[quoteIndex].topic;
   $(".currentQuote").show()
   $("#quote").text(myQuote);
   $("#speaker").text(mySpeaker);
   $("#topic").text(myTopic);
 });
});
