window.onload = function(){

    const wrapper = document.getElementById('slider-wrapper');

    const images = wrapper.querySelectorAll('img');

    const imageHeight = images[0].clientHeight;

    const totalImages = images.length;

    let currentIndex = 0;



    function updateSlide() {

      wrapper.style.top = `-${currentIndex * imageHeight}px`;

    }


    // Slide to next image (upwards)

    function nextSlide() {

      currentIndex++;

      if (currentIndex >= totalImages) {

        currentIndex = 0;

      }

      updateSlide();

    }



    // Slide to previous image (downwards)

    function prevSlide() {

      currentIndex--;

      if (currentIndex < 0) {

        currentIndex = totalImages - 1;

      }

      updateSlide();

    }



    document.getElementById('nextBtn').addEventListener('click', nextSlide);

    document.getElementById('prevBtn').addEventListener('click', prevSlide);



    // Optional: auto-slide every 5 seconds

    setInterval(nextSlide, 5000);

    

    
    const sideSlide = document.getElementById('side-slide'); 
    const sideImage = document.querySelectorAll('img');
    const next = document.getElementById('next-btn');
    const prev = document.getElementById('prev-btn');

    imageWidth = sideImage[0].clientWidth;

    allImages = sideImage.length;

    imageIndex = 0;

    function horizontalSlide(){
      sideSlide.style.transform = `translateX(-${imageIndex * imageWidth}px)`;
    }

    function nextShow() {

      imageIndex++;

      if (imageIndex >= allImages) {

        imageIndex = 0;

      }

      horizontalSlide();

    }

    function prevShow() {

      imageIndex--;

      if (imageIndex < 0) {

        imageIndex = allImages - 1;

      }

      horizontalSlide();

    }

    next.addEventListener('click', nextShow);

    prev.addEventListener('click', prevShow);


    setInterval(nextShow, 5000);
    }

    