// 获取dom节点
const showBtn = document.getElementById('menu-btn');
const sideBar = document.querySelector('aside');
const closeBtn = document.getElementById('close-btn');
const themeToggler = document.querySelector('.theme-toggler');
// 添加事件

// 显示导航栏
showBtn.addEventListener('click',()=>{
    sideBar.style.display = 'block';
})
// 隐藏导航栏
closeBtn.addEventListener('click',()=>{
    sideBar.style.display = 'none';
})

// 主题切换
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

Orders.forEach(order=>{
    const tr = document.createElement('tr');
    const trContent = `
    <tr>
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping === '拒绝'?'danger':order.shipping=== '待定'?"warning":'primary'}">${order.shipping}</td>
    <td class="primary">详情</td>
</tr>
    `;
    tr.innerHTML = trContent
    document.querySelector('table tbody').appendChild(tr)
})