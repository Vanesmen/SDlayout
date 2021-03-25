(function(){})(
    document.addEventListener("DOMContentLoaded", function(){
        
        let navigationItems = document.querySelectorAll(".navigation-item");
        navigationItems.forEach(el => el.addEventListener("click", function(){
            navigationItems.forEach(item => item.classList.remove("navigation-item_active"));
            el.classList.add("navigation-item_active");
        }));

        let mobileTab = document.querySelector(".mobileTab");
        let sidebar = document.querySelector(".sidebar");
        mobileTab.addEventListener("click", function(){

            sidebar.classList.toggle("sidebar_open");
        })
    })
)