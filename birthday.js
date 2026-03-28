
// ============================================
// BIRTHDAY WEBSITE - INTERACTIVE FUNCTIONALITY
// ============================================

// ============================================
// DRAW STRAWBERRY CAKE
// ============================================

function drawStrawberryCake() {
    const canvas = document.getElementById('cakeCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Save context
    ctx.save();
    
    // Get animation time for smooth animations
    const time = Date.now() * 0.001;
    const bounce = Math.sin(time * 2) * 2;
    
    // Apply gentle bounce animation to whole cake
    ctx.translate(150, 150 + bounce);
    ctx.translate(-150, -150);
    
    // ========== BOTTOM LAYER (DARK CHOCOLATE) ==========
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetY = 5;
    
    // Draw bottom layer body
    const layer1Gradient = ctx.createLinearGradient(50, 160, 250, 220);
    layer1Gradient.addColorStop(0, '#6B3410');
    layer1Gradient.addColorStop(0.5, '#4A2010');
    layer1Gradient.addColorStop(1, '#3D1A0A');
    
    ctx.fillStyle = layer1Gradient;
    ctx.beginPath();
    ctx.moveTo(50, 210);
    ctx.lineTo(50, 160);
    ctx.bezierCurveTo(50, 140, 70, 130, 150, 130);
    ctx.bezierCurveTo(230, 130, 250, 140, 250, 160);
    ctx.lineTo(250, 210);
    ctx.fill();
    
    // Layer 1 top frosting
    ctx.fillStyle = '#E8B4A8';
    ctx.beginPath();
    ctx.ellipse(150, 130, 100, 28, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Frosting swirls on bottom
    ctx.strokeStyle = '#D4A59D';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    for (let i = 0; i < 8; i++) {
        const x = 50 + i * 25;
        const y = 135 + Math.sin(i * 0.5) * 3;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    // ========== MIDDLE LAYER (LIGHT PINK) ==========
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 3;
    
    const layer2Gradient = ctx.createLinearGradient(55, 90, 245, 150);
    layer2Gradient.addColorStop(0, '#FF85B3');
    layer2Gradient.addColorStop(0.5, '#FF6BA6');
    layer2Gradient.addColorStop(1, '#E84C6F');
    
    ctx.fillStyle = layer2Gradient;
    ctx.beginPath();
    ctx.moveTo(55, 160);
    ctx.lineTo(55, 90);
    ctx.bezierCurveTo(55, 75, 75, 65, 150, 65);
    ctx.bezierCurveTo(225, 65, 245, 75, 245, 90);
    ctx.lineTo(245, 160);
    ctx.fill();
    
    // Layer 2 top frosting
    ctx.fillStyle = '#FFD6E8';
    ctx.beginPath();
    ctx.ellipse(150, 65, 95, 26, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Frosting swirls on middle
    ctx.strokeStyle = '#FFBEDB';
    ctx.lineWidth = 5;
    for (let i = 0; i < 7; i++) {
        const x = 60 + i * 25;
        const y = 70 + Math.sin(time + i) * 2;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    // ========== TOP LAYER (WHIPPED CREAM) ==========
    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 2;
    
    const layer3Gradient = ctx.createLinearGradient(60, 20, 240, 60);
    layer3Gradient.addColorStop(0, '#FFFFFF');
    layer3Gradient.addColorStop(0.5, '#FFFBF0');
    layer3Gradient.addColorStop(1, '#FFFACD');
    
    ctx.fillStyle = layer3Gradient;
    ctx.beginPath();
    ctx.moveTo(60, 45);
    ctx.lineTo(60, 15);
    ctx.bezierCurveTo(60, 5, 80, 0, 150, 0);
    ctx.bezierCurveTo(220, 0, 240, 5, 240, 15);
    ctx.lineTo(240, 45);
    ctx.fill();
    
    // Top frosting with fluffy texture
    ctx.fillStyle = '#FFFBF0';
    ctx.beginPath();
    ctx.ellipse(150, 15, 85, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Frosting dollops/swirls on top (animated)
    ctx.fillStyle = '#FFFACD';
    for (let i = 0; i < 8; i++) {
        const x = 65 + i * 22;
        const bobble = Math.sin(time * 3 + i) * 2;
        ctx.beginPath();
        ctx.ellipse(x, 25 + bobble, 7, 8, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Top shine
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.ellipse(130, 8, 50, 12, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.shadowColor = 'transparent';
    
    // ========== STRAWBERRIES WITH ANIMATION ==========
    const strawberries = [
        { x: 85, y: 125, size: 18 },  // Bottom left
        { x: 150, y: 130, size: 20 }, // Bottom center
        { x: 215, y: 125, size: 18 }, // Bottom right
        { x: 110, y: 70, size: 15 },  // Middle left
        { x: 190, y: 70, size: 15 },  // Middle right
        { x: 150, y: 25, size: 14 }   // Top
    ];
    
    strawberries.forEach((berry, idx) => {
        const wobbleX = Math.sin(time * 2 + idx * 0.8) * 1.5;
        const wobbleY = Math.cos(time * 2 + idx * 0.8) * 1;
        drawStrawberry(ctx, berry.x + wobbleX, berry.y + wobbleY, berry.size, time + idx);
    });
    
    // ========== CANDLES WITH FLAME ANIMATION ==========
    const candlePositions = [70, 100, 130, 160, 190];
    candlePositions.forEach((x, idx) => {
        drawAnimatedCandle(ctx, x, 45, time + idx);
    });
    
    // ========== SPARKLES AND SHINE ==========
    drawAnimatedSparkles(ctx, time);
    
    ctx.restore();
}

function drawStrawberry(ctx, x, y, size, time) {
    ctx.save();
    
    ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 3;
    
    // Strawberry body with realistic gradient
    const strawberryGradient = ctx.createRadialGradient(x - size/4, y - size/3, size/6, x, y, size);
    strawberryGradient.addColorStop(0, '#FF8FA3');
    strawberryGradient.addColorStop(0.4, '#F73859');
    strawberryGradient.addColorStop(0.8, '#D90429');
    strawberryGradient.addColorStop(1, '#8B0000');
    
    ctx.fillStyle = strawberryGradient;
    ctx.beginPath();
    ctx.ellipse(x, y, size * 0.8, size * 1.2, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Strawberry shine (glossy effect)
    ctx.fillStyle = 'rgba(255, 200, 210, 0.7)';
    ctx.beginPath();
    ctx.ellipse(x - size * 0.3, y - size * 0.4, size * 0.5, size * 0.6, -Math.PI/5, 0, Math.PI * 2);
    ctx.fill();
    
    // Secondary shine for extra gloss
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.beginPath();
    ctx.ellipse(x - size * 0.2, y - size * 0.3, size * 0.3, size * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Seeds with animation
    ctx.fillStyle = '#FFD700';
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 6; j++) {
            const seedX = x - size * 0.6 + (i * size * 0.2);
            const seedY = y - size * 0.5 + (j * size * 0.2);
            const pulse = 1 + Math.sin(time * 3 + i + j) * 0.2;
            ctx.beginPath();
            ctx.arc(seedX, seedY, 1.5 * pulse, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Green leaf crown
    const leafGrad = ctx.createLinearGradient(x, y - size - 2, x, y - size - 18);
    leafGrad.addColorStop(0, '#52B788');
    leafGrad.addColorStop(0.5, '#2ECC71');
    leafGrad.addColorStop(1, '#1B8E4D');
    
    ctx.fillStyle = leafGrad;
    ctx.beginPath();
    // Draw leafy crown
    for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
        const leafX = x + Math.cos(angle) * size * 0.6;
        const leafY = y - size - 5 + Math.sin(angle) * size * 0.4;
        
        if (i === 0) {
            ctx.moveTo(x, y - size - 2);
        }
        ctx.lineTo(leafX, leafY);
    }
    ctx.lineTo(x, y - size - 18);
    ctx.closePath();
    ctx.fill();
    
    // Leaf highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.beginPath();
    ctx.ellipse(x - size * 0.2, y - size - 10, size * 0.3, size * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
}

function drawAnimatedCandle(ctx, x, y, time) {
    ctx.save();
    
    // Candle body shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 6;
    ctx.shadowOffsetY = 2;
    
    // Candle wax gradient
    const candleGrad = ctx.createLinearGradient(x - 3, y - 20, x + 3, y);
    candleGrad.addColorStop(0, '#FFFBF0');
    candleGrad.addColorStop(0.5, '#FFF8DC');
    candleGrad.addColorStop(1, '#FFE4B5');
    
    ctx.fillStyle = candleGrad;
    ctx.beginPath();
    ctx.moveTo(x - 3.5, y - 20);
    ctx.lineTo(x + 3.5, y - 20);
    ctx.quadraticCurveTo(x + 4, y - 10, x + 3.5, y);
    ctx.lineTo(x - 3.5, y);
    ctx.quadraticCurveTo(x - 4, y - 10, x - 3.5, y - 20);
    ctx.fill();
    
    // Candle highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.beginPath();
    ctx.rect(x - 1.5, y - 18, 1.5, 14);
    ctx.fill();
    
    // Candle top
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(x, y, 4.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Candle top shine
    ctx.fillStyle = 'rgba(255, 255, 200, 0.8)';
    ctx.beginPath();
    ctx.arc(x - 1, y - 1, 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Animated flame
    const flameWobble = Math.sin(time * 4) * 3;
    const flameHeight = 3 + Math.sin(time * 2.5) * 1;
    
    // Outer flame (orange) - larger
    ctx.fillStyle = '#FF8C00';
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.ellipse(x + flameWobble, y - 12 - flameHeight, 3.5, 9 + flameHeight, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Middle flame (orange-yellow)
    ctx.fillStyle = '#FFA500';
    ctx.globalAlpha = 0.85;
    ctx.beginPath();
    ctx.ellipse(x + flameWobble * 0.6, y - 13 - flameHeight, 2.5, 7.5 + flameHeight * 0.7, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Inner flame (yellow)
    ctx.fillStyle = '#FFD700';
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.ellipse(x + flameWobble * 0.3, y - 14 - flameHeight, 1.5, 5 + flameHeight * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Flame tip (bright white-yellow)
    ctx.fillStyle = '#FFFF99';
    ctx.globalAlpha = 0.95;
    ctx.beginPath();
    ctx.arc(x + flameWobble * 0.2, y - 18 - flameHeight, 1, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.globalAlpha = 1;
    ctx.restore();
}

function drawAnimatedSparkles(ctx, time) {
    const sparkles = [
        { x: 70, y: 50, speed: 1 },
        { x: 230, y: 70, speed: 0.9 },
        { x: 100, y: 35, speed: 1.1 },
        { x: 200, y: 95, speed: 0.8 },
        { x: 150, y: 25, speed: 1.2 },
        { x: 80, y: 90, speed: 0.95 },
        { x: 220, y: 130, speed: 1.05 }
    ];
    
    sparkles.forEach((sparkle, idx) => {
        const wobble = Math.sin(time * 3 + idx) * 0.5;
        const scale = 2.5 + wobble;
        const opacity = 0.6 + Math.sin(time * 2 + idx) * 0.4;
        
        // Sparkle glow
        ctx.fillStyle = `rgba(255, 215, 0, ${opacity * 0.4})`;
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, scale + 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Main sparkle
        ctx.fillStyle = `rgba(255, 255, 100, ${opacity})`;
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, scale, 0, Math.PI * 2);
        ctx.fill();
        
        // Star sparkle
        ctx.fillStyle = '#FFFF99';
        ctx.globalAlpha = opacity * 0.9;
        drawStar(ctx, sparkle.x, sparkle.y, 5, 2, 1);
        ctx.fill();
        
        ctx.globalAlpha = 1;
    });
}

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let step = Math.PI / spikes;
    
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
        ctx.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
        rot += step;
        ctx.lineTo(cx + Math.cos(rot) * innerRadius, cy + Math.sin(rot) * innerRadius);
        rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
}

// ============================================
// CONFETTI ANIMATION
// ============================================

function createConfetti() {
    const cakeImage = document.querySelector('.cake-image');
    const rect = cakeImage.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const confettiCount = 40;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = '🍓';
        confetti.style.position = 'fixed';
        confetti.style.left = centerX + 'px';
        confetti.style.top = centerY + 'px';
        confetti.style.fontSize = Math.random() * 15 + 20 + 'px';
        confetti.style.zIndex = '2000';
        confetti.style.pointerEvents = 'none';
        
        // Random direction for splashing outward
        const angle = (Math.PI * 2 * i) / confettiCount + (Math.random() - 0.5);
        const distance = 300 + Math.random() * 200;
        const velocity = 2 + Math.random() * 2;
        
        const keyframes = `
            @keyframes splash${i} {
                0% {
                    transform: translate(0, 0);
                    opacity: 1;
                }
                100% {
                    transform: translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = keyframes;
        document.head.appendChild(style);
        
        confetti.style.animation = `splash${i} ${velocity}s ease-out forwards`;
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
            style.remove();
        }, velocity * 1000);
    }
}

// ============================================
// INTERACTIVE ENVELOPE
// ============================================

function setupEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    
    if (envelope) {
        const openEnvelope = (e) => {
            e.stopPropagation();
            envelope.classList.add('opened');
            
            // Show letter after flap animation
            setTimeout(() => {
                envelope.classList.add('hidden');
                letter.classList.remove('hidden');
            }, 600);
        };
        
        envelope.addEventListener('click', openEnvelope);
        envelope.addEventListener('touchend', openEnvelope);
    }
}

// ============================================
// MODAL MANAGEMENT
// ============================================

function setupMessageButton() {
    const messageBtn = document.getElementById('messageBtn');
    const messageModal = document.getElementById('messageModal');
    const backBtn = document.getElementById('backBtn');
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const backdrop = messageModal ? messageModal.querySelector('.modal-backdrop') : null;
    
    if (messageBtn && messageModal) {
        const openModal = () => {
            messageModal.classList.remove('hidden');
            // Reset envelope and letter
            envelope.classList.remove('opened', 'hidden');
            letter.classList.add('hidden');
        };
        
        messageBtn.addEventListener('click', openModal);
        messageBtn.addEventListener('touchend', openModal);
    }
    
    if (backBtn) {
        const backHandler = () => {
            letter.classList.add('hidden');
            envelope.classList.remove('hidden');
        };
        
        backBtn.addEventListener('click', backHandler);
        backBtn.addEventListener('touchend', backHandler);
    }
    
    if (backdrop) {
        const closeModal = () => {
            messageModal.classList.add('hidden');
        };
        
        backdrop.addEventListener('click', closeModal);
        backdrop.addEventListener('touchend', closeModal);
    }
}

function setupVideoButton() {
    const videoBtn = document.getElementById('videoBtn');
    const videoModal = document.getElementById('videoModal');
    const closeVideoBtn = document.getElementById('closeVideoBtn');
    const backdrop = videoModal ? videoModal.querySelector('.modal-backdrop') : null;
    const video = document.getElementById('birthdayVideo');
    
    if (videoBtn && videoModal) {
        const openVideo = () => {
            videoModal.classList.remove('hidden');
            if (video) {
                video.play();
            }
        };
        
        videoBtn.addEventListener('click', openVideo);
        videoBtn.addEventListener('touchend', openVideo);
    }
    
    if (closeVideoBtn) {
        const closeVideo = () => {
            videoModal.classList.add('hidden');
            if (video) {
                video.pause();
            }
        };
        
        closeVideoBtn.addEventListener('click', closeVideo);
        closeVideoBtn.addEventListener('touchend', closeVideo);
    }
    
    if (backdrop) {
        const closeVideoBackdrop = () => {
            videoModal.classList.add('hidden');
            if (video) {
                video.pause();
            }
        };
        
        backdrop.addEventListener('click', closeVideoBackdrop);
        backdrop.addEventListener('touchend', closeVideoBackdrop);
    }
}

// ============================================
// CLOSE MODALS ON ESC KEY
// ============================================

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const messageModal = document.getElementById('messageModal');
            const videoModal = document.getElementById('videoModal');
            const video = document.getElementById('birthdayVideo');
            
            if (messageModal && !messageModal.classList.contains('hidden')) {
                messageModal.classList.add('hidden');
            }
            
            if (videoModal && !videoModal.classList.contains('hidden')) {
                videoModal.classList.add('hidden');
                if (video) {
                    video.pause();
                }
            }
        }
    });
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Setup interactive elements
    setupEnvelope();
    setupMessageButton();
    setupVideoButton();
    setupKeyboardShortcuts();
    setupAudioButton();
    setupCakeClick();
});

// ============================================
// AUDIO BUTTON SETUP
// ============================================

function setupAudioButton() {
    const playBtn = document.getElementById('playBtn');
    const audio = document.getElementById('birthdayAudio');
    
    if (playBtn && audio) {
        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playBtn.textContent = '⏸ Pause';
            } else {
                audio.pause();
                playBtn.textContent = '▶ Play this while reading';
            }
        });
        
        audio.addEventListener('ended', () => {
            playBtn.textContent = '▶ Play this while reading';
        });
    }
}

// ============================================
// CAKE CLICK SETUP
// ============================================

function setupCakeClick() {
    const cakeImage = document.querySelector('.cake-image');
    
    if (cakeImage) {
        cakeImage.addEventListener('click', () => {
            createConfetti();
        });
    }
}

// ============================================
// RESPONSIVE HANDLING
// ============================================

window.addEventListener('resize', () => {
    // Responsive handling
});

