const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".hilite", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".sr-only", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".text1, { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("text1", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo("text1", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");