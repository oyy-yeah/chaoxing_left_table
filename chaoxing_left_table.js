// 获取侧边栏和所有一级菜单项
const sidebar = document.querySelector('.sidebar');
const menuItems = document.querySelectorAll('.menu-item');

// 为每个一级菜单添加点击事件
menuItems.forEach(item => {
    const menuLink = item.querySelector('.menu-link');
    
    menuLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 切换展开/收起状态
        item.classList.toggle('expanded');
    });
});

// 当鼠标离开侧边栏时，收起所有展开的子菜单
sidebar.addEventListener('mouseleave', function() {
    menuItems.forEach(item => {
        item.classList.remove('expanded');
    });
});

