// Scroll reveal (IntersectionObserver)
const revealEls = document.querySelectorAll("[data-reveal]");
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('revealed'); io.unobserve(e.target); }
  });
},{root:null,threshold:.2});
revealEls.forEach(el=>io.observe(el));

// FAQ accordion
document.querySelectorAll('.acc-header').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item = btn.parentElement;
    const open = item.classList.contains('active');
    document.querySelectorAll('.acc-item').forEach(i=>i.classList.remove('active'));
    if(!open){ item.classList.add('active'); }
  });
});

// Simple carousel for proofs (mobile)
function initMobileCarousel(){
  const row = document.querySelector('.proofs-row');
  if(!row) return;
  const isMobile = window.matchMedia('(max-width: 1000px)').matches;
  if(isMobile){
    row.style.display='flex';
    row.style.overflowX='auto';
    row.style.scrollSnapType='x mandatory';
    row.querySelectorAll('.proof').forEach(card=>{
      card.style.minWidth='88%';
      card.style.scrollSnapAlign='center';
    });
  }
}
initMobileCarousel();
window.addEventListener('resize', initMobileCarousel);





    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const indicators = document.querySelector('.carousel-indicators');

    let currentIndex = 0;

    // Criar indicadores
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      if (index === 0) dot.classList.add('active');
      indicators.appendChild(dot);
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
    });

    const dots = Array.from(indicators.children);

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });