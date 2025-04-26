window.addEventListener("load", function () {
  // Define all ad elements
  const ads = [
    { id: "banner-ad", name: "Banner Ad" },
    { id: "text-ad", name: "Text Ad" },
    { id: "native-ad", name: "Native Ad" },
    { id: "video-ad", name: "Video Ad" }
  ];

  let blockedCount = 0;
  let resultHTML = "<h3>Test Results:</h3>";

  // Loop through each ad to check if it is blocked
  ads.forEach(ad => {
    const el = document.getElementById(ad.id);
    const isBlocked = el.offsetHeight === 0 || el.offsetParent === null;
    
    if (isBlocked) blockedCount++;

    resultHTML += `<p>${ad.name}: <span class="${isBlocked ? 'blocked' : 'visible'}">${isBlocked ? 'Blocked ❌' : 'Visible ✅'}</span></p>`;
  });

  resultHTML += `<p><strong>Total Ads Blocked: ${blockedCount}/${ads.length}</strong></p>`;
  document.getElementById("results").innerHTML = resultHTML;

  // Popup functionality with a delay
  setTimeout(function() {
    document.getElementById('popup').style.display = 'block';
  }, 5000);  // Popup appears after 5 seconds

  // Close Popup functionality
  document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });

  // Sticky Footer Ad
  const footerAd = document.querySelector('.ad-footer');
  if (footerAd) {
    footerAd.innerHTML = "You can see our footer ad here!";
  }
});
