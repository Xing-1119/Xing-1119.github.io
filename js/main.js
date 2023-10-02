document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navigator a");

    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = link.getAttribute("data-target");
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth", // 使用平滑滾動效果
                });
            }
        });
    });
});
