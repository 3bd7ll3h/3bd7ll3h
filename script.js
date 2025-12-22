// تهيئة Three.js للخلفية 3D
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true }); // شفافية للخلفية
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('threejs-background').appendChild(renderer.domElement);

// إضافة كرات 3D متحركة (particles)
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 100;
const positions = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20; // توزيع عشوائي
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particlesMaterial = new THREE.PointsMaterial({ color: 0x00ff88, size: 0.1 }); // نيون أخضر
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

camera.position.z = 5;

// دالة التحديث والرسم
function animate() {
    requestAnimationFrame(animate);
    particles.rotation.x += 0.001; // دوران بطيء
    particles.rotation.y += 0.001;
    camera.rotation.y += 0.002; // دوران الكاميرا
    renderer.render(scene, camera);
}
animate();

// تحديث الحجم عند تغيير النافذة
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// دالة التمرير إلى قسم الاتصال
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// دالة zoom للصور في معرض الصور
function zoomImage(element) {
    gsap.to(element, { scale: 1.2, duration: 0.5, yoyo: true, repeat: 1 });
}

// إضافة تأثيرات GSAP للكروت
gsap.from('.service-card', { opacity: 0, y: 50, duration: 1, stagger: 0.2 });
gsap.from('.portfolio-item', { opacity: 0, scale: 0.8, duration: 1, stagger: 0.1 });