(function() {
    const navToggle = document.getElementById('nav-toggle');
    const navItems = document.getElementById('nav-items');
    
    navToggle.addEventListener('click', function() {
        navItems.classList.toggle('show');
    });
    
   
    function preloader() {
        const imagesList = [
           "./img/solar-panels.jpg",
           "./img/wind-energy.jpg",
           "./img/energy-efficiency.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
   
    const buttons = document.querySelectorAll('.solution-btn');
    
    const resourceObject = {
        solarPanels: {
            headingContent: "Affordable Solar Panel Solutions",
            bodyText: `Modern solar panel technology has become increasingly affordable in recent years. With government incentives, tax credits, and financing options, the initial investment in solar panels has decreased significantly. Most homeowners can expect to recoup their investment within 5-7 years.
            
            We offer flexible payment plans, community solar options for those who can't install panels on their own property, and innovative solutions like solar leasing. These approaches make it possible for households with average incomes to benefit from clean solar energy while reducing their monthly utility bills.`,
            imgUrl: "./img/solar-panels.jpg",
            imgAlt: "Solar panels installed on a residential roof"
        },
        windEnergy: {
            headingContent: "Cost-Effective Wind Energy",
            bodyText: `Small-scale wind turbines have become more efficient and less expensive, making them viable options for rural and suburban homes. By partnering with local communities, we help establish shared wind energy systems that distribute costs and benefits among multiple households.
            
            Our micro-wind solutions can supplement your existing energy supply, reducing dependence on the grid during windy periods. Combined with smart energy management systems, these installations can significantly lower your monthly energy expenses while contributing to a greener planet.`,
            imgUrl: "./img/wind-energy.jpg",
            imgAlt: "Small residential wind turbines in a field"
        },
        energyEfficiency: {
            headingContent: "Home Energy Efficiency Upgrades",
            bodyText: `Before investing in renewable energy generation, we recommend optimizing your home's energy efficiency. Our affordable audit service identifies the most cost-effective improvements you can make, from better insulation to smarter appliances.
            
            Energy-efficient upgrades typically pay for themselves within months, not years. We offer interest-free financing for efficiency improvements and connect homeowners with applicable rebates and incentives. By reducing your overall energy consumption first, you'll need a smaller renewable system later, saving substantially on initial investment costs.`,
            imgUrl: "./img/energy-efficiency.jpg",
            imgAlt: "Smart home energy efficiency monitoring system"
        }
    };


    const contentContainer = document.getElementById('content-container');
    
    function handleSelection(event) {
       
        for(let i = 0; i < buttons.length; i++) {
            if(buttons[i].hasAttribute('id')) {
                buttons[i].removeAttribute('id');
            }
        }

        event.target.setAttribute('id', 'active-button');
    
        
        let content;
        const buttonText = event.target.textContent.trim();
        
        if(buttonText === 'Solar Panels') {
            content = resourceObject.solarPanels;
        } else if(buttonText === 'Wind Energy') {
            content = resourceObject.windEnergy;
        } else if(buttonText === 'Energy Efficiency') {
            content = resourceObject.energyEfficiency;
        }
        
        const paragraphs = content.bodyText.split('\n\n').map(p => 
            `<p>${p.trim()}</p>`
        ).join('');
        
        contentContainer.innerHTML = `
            <h1>${content.headingContent}</h1>
            <div class="content-wrapper">
                <img src="${content.imgUrl}" alt="${content.imgAlt}">
                <div class="content-text">
                    ${paragraphs}
                    <div class="cta-button">
                        <a href="#" class="btn">Learn More</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handleSelection);
    }
})();
