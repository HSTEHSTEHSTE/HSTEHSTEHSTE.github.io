const profileImages = [
    { src: "Assets/images/headshot-mirror.jpg", alt: "Portrait of Henry Li" },
    { src: "Assets/images/headshot-with-blahaj.jpg", alt: "Henry Li holding a Blåhaj plush" },
    { src: "Assets/images/portrait-conference.jpg", alt: "Portrait of Henry Li at a conference" },
    { src: "Assets/images/portrait-graduation.png", alt: "Portrait of Henry Li in graduation attire" },
    { src: "Assets/images/portrait-outdoors.jpg", alt: "Portrait of Henry Li outdoors" }
];

const profileImage = document.getElementById("profile-image");

if (profileImage) {
    const selectedImage = profileImages[Math.floor(Math.random() * profileImages.length)];
    profileImage.src = selectedImage.src;
    profileImage.alt = selectedImage.alt;
}
