
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
    
    // ========== BOTTOM CHOCOLATE LAYER ==========
    // Shadow/depth for bottom layer
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 3;
    
    // Bottom cake base
    const bottomGradient = ctx.createLinearGradient(40, 180, 260, 240);
    bottomGradient.addColorStop(0, '#A0522D');
    bottomGradient.addColorStop(0.5, '#8B4513');
    bottomGradient.addColorStop(1, '#654321');
    
    ctx.fillStyle = bottomGradient;
    ctx.beginPath();
    ctx.moveTo(40, 220);
    ctx.lineTo(40, 160);
    ctx.bezierCurveTo(40, 140, 60, 130, 150, 130);
    ctx.bezierCurveTo(240, 130, 260, 140, 260, 160);
    ctx.lineTo(260, 220);
    ctx.fill();
    
    // Bottom layer top ellipse
    ctx.fillStyle = '#D2691E';
    ctx.beginPath();
    ctx.ellipse(150, 130, 110, 35, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Highlight on bottom layer
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.beginPath();
    ctx.ellipse(120, 120, 80, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = 6;
    ctx.shadowOffsetY = 2;
    
    // ========== MIDDLE PINK LAYER ==========
    const middleGradient = ctx.createLinearGradient(45, 100, 255, 160);
    middleGradient.addColorStop(0, '#FF69B4');
    middleGradient.addColorStop(0.5, '#FF85C1');
    middleGradient.addColorStop(1, '#FF69B4');
    
    ctx.fillStyle = middleGradient;
    ctx.beginPath();
    ctx.moveTo(45, 160);
    ctx.lineTo(45, 100);
    ctx.bezierCurveTo(45, 85, 65, 75, 150, 75);
    ctx.bezierCurveTo(235, 75, 255, 85, 255, 100);
    ctx.lineTo(255, 160);
    ctx.fill();
    
    // Middle layer top ellipse
    ctx.fillStyle = '#FFB6D9';
    ctx.beginPath();
    ctx.ellipse(150, 75, 105, 32, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Highlight on middle layer
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.ellipse(115, 70, 80, 22, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // ========== TOP CREAM LAYER ==========
    ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 1;
    
    const creamGradient = ctx.createLinearGradient(50, 30, 250, 70);
    creamGradient.addColorStop(0, '#FFFACD');
    creamGradient.addColorStop(0.5, '#FFFFFF');
    creamGradient.addColorStop(1, '#FFFACD');
    
    ctx.fillStyle = creamGradient;
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 20);
    ctx.bezierCurveTo(50, 10, 70, 5, 150, 5);
    ctx.bezierCurveTo(230, 5, 250, 10, 250, 20);
    ctx.lineTo(250, 50);
    ctx.fill();
    
    // Cream top
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.ellipse(150, 20, 95, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Cream frosting swirl
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(130, 25, 35, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(170, 25, 35, 0, Math.PI * 2);
    ctx.stroke();
    
    // Cream highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.beginPath();
    ctx.ellipse(120, 18, 60, 15, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.shadowColor = 'transparent';
    
    // ========== STRAWBERRIES ==========
    // Bottom layer strawberries
    drawStrawberry3D(ctx, 80, 135, 26);
    drawStrawberry3D(ctx, 150, 140, 26);
    drawStrawberry3D(ctx, 220, 135, 26);
    
    // Middle layer strawberries
    drawStrawberry3D(ctx, 95, 85, 22);
    drawStrawberry3D(ctx, 205, 85, 22);
    
    // Top layer strawberry
    drawStrawberry3D(ctx, 150, 32, 20);
    
    // ========== CANDLES ==========
    const candleCount = 5;
    for (let i = 0; i < candleCount; i++) {
        const x = 90 + (i * 30);
        drawCandleCute(ctx, x, 42);
    }
    
    // ========== DECORATIVE ELEMENTS ==========
    drawSparkles3D(ctx);
    
    ctx.restore();
}

function drawStrawberry3D(ctx, x, y, size) {
    // Shadow under strawberry
    ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
    ctx.shadowBlur = 6;
    ctx.shadowOffsetY = 2;
    
    // Strawberry body - gradient for 3D effect
    const strawGradient = ctx.createRadialGradient(x - 2, y - 3, size / 4, x, y, size);
    strawGradient.addColorStop(0, '#FF6B7A');
    strawGradient.addColorStop(0.6, '#DC143C');
    strawGradient.addColorStop(1, '#B22222');
    
    ctx.fillStyle = strawGradient;
    ctx.beginPath();
    ctx.ellipse(x, y, size / 2, size, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Strawberry shine/highlight
    ctx.fillStyle = 'rgba(255, 200, 200, 0.4)';
    ctx.beginPath();
    ctx.ellipse(x - size / 4, y - size / 3, size / 3, size / 2.5, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Strawberry seeds
    ctx.fillStyle = '#FFD700';
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            const sx = x - size / 2.5 + (i * (size / 3.5));
            const sy = y - size / 2 + (j * (size / 3));
            ctx.beginPath();
            ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Strawberry leaf - 3D effect
    const leafGradient = ctx.createLinearGradient(x, y - size - 5, x, y - size - 18);
    leafGradient.addColorStop(0, '#2ECC71');
    leafGradient.addColorStop(1, '#27AE60');
    
    ctx.fillStyle = leafGradient;
    ctx.beginPath();
    ctx.moveTo(x, y - size - 5);
    ctx.lineTo(x - 10, y - size - 16);
    ctx.lineTo(x - 5, y - size - 22);
    ctx.lineTo(x + 5, y - size - 22);
    ctx.lineTo(x + 10, y - size - 16);
    ctx.closePath();
    ctx.fill();
    
    // Leaf shine
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.beginPath();
    ctx.moveTo(x - 2, y - size - 8);
    ctx.lineTo(x + 3, y - size - 13);
    ctx.lineTo(x, y - size - 18);
    ctx.closePath();
    ctx.fill();
    
    ctx.shadowColor = 'transparent';
}

function drawCandleCute(ctx, x, y) {
    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 1;
    
    // Candle wax body - gradient
    const candleGradient = ctx.createLinearGradient(x - 4, y - 15, x + 4, y);
    candleGradient.addColorStop(0, '#FFFACD');
    candleGradient.addColorStop(0.5, '#FFF8DC');
    candleGradient.addColorStop(1, '#FFE4B5');
    
    ctx.fillStyle = candleGradient;
    ctx.beginPath();
    ctx.moveTo(x - 4, y - 15);
    ctx.lineTo(x + 4, y - 15);
    ctx.quadraticCurveTo(x + 5, y - 10, x + 4.5, y);
    ctx.lineTo(x - 4.5, y);
    ctx.quadraticCurveTo(x - 5, y - 10, x - 4, y - 15);
    ctx.fill();
    
    // Candle highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.beginPath();
    ctx.rect(x - 2.5, y - 13, 2, 10);
    ctx.fill();
    
    // Candle top circle (cute)
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
    
    // Flame - animated wobbly effect
    const time = Date.now() * 0.003;
    const wobble = Math.sin(time + x * 0.05) * 2;
    
    // Outer flame (orange)
    ctx.fillStyle = '#FF8C00';
    ctx.globalAlpha = 0.85;
    ctx.beginPath();
    ctx.ellipse(x + wobble, y - 12, 4, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Inner flame (yellow)
    ctx.fillStyle = '#FFD700';
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.ellipse(x + wobble * 0.5, y - 13, 2.5, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Flame tip (bright)
    ctx.fillStyle = '#FFFF00';
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.arc(x + wobble * 0.5, y - 16, 1.5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.globalAlpha = 1;
    ctx.shadowColor = 'transparent';
}

function drawSparkles3D(ctx) {
    const time = Date.now() * 0.005;
    const sparklePositions = [
        { x: 60, y: 55, base: 1 },
        { x: 240, y: 75, base: 0.8 },
        { x: 100, y: 45, base: 1.2 },
        { x: 200, y: 110, base: 0.9 },
        { x: 150, y: 35, base: 1.1 },
    ];
    
    sparklePositions.forEach((pos, idx) => {
        const wobble = Math.sin(time + idx) * 0.5;
        const scale = 3 + wobble;
        
        // Sparkle background glow
        ctx.fillStyle = 'rgba(255, 215, 0, 0.3)';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, scale + 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Main sparkle
        ctx.fillStyle = '#FFD700';
        ctx.globalAlpha = 0.7 + (Math.sin(time + idx) * 0.2);
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, scale, 0, Math.PI * 2);
        ctx.fill();
        
        // Star sparkle
        ctx.fillStyle = '#FFFF00';
        ctx.globalAlpha = 0.8;
        drawStar(ctx, pos.x, pos.y, 5, 2.5, 1.5);
        ctx.fill();
    });
    ctx.globalAlpha = 1;
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
// INTERACTIVE ENVELOPE
// ============================================

function setupEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    
    if (envelope) {
        envelope.addEventListener('click', (e) => {
            e.stopPropagation();
            envelope.classList.add('opened');
            
            // Show letter after flap animation
            setTimeout(() => {
                envelope.classList.add('hidden');
                letter.classList.remove('hidden');
            }, 600);
        });
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
        messageBtn.addEventListener('click', () => {
            messageModal.classList.remove('hidden');
            // Reset envelope and letter
            envelope.classList.remove('opened', 'hidden');
            letter.classList.add('hidden');
        });
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            letter.classList.add('hidden');
            envelope.classList.remove('hidden');
        });
    }
    
    if (backdrop) {
        backdrop.addEventListener('click', () => {
            messageModal.classList.add('hidden');
        });
    }
}

function setupVideoButton() {
    const videoBtn = document.getElementById('videoBtn');
    const videoModal = document.getElementById('videoModal');
    const closeVideoBtn = document.getElementById('closeVideoBtn');
    const backdrop = videoModal ? videoModal.querySelector('.modal-backdrop') : null;
    const video = document.getElementById('birthdayVideo');
    
    if (videoBtn && videoModal) {
        videoBtn.addEventListener('click', () => {
            videoModal.classList.remove('hidden');
            if (video) {
                video.play();
            }
        });
    }
    
    if (closeVideoBtn) {
        closeVideoBtn.addEventListener('click', () => {
            videoModal.classList.add('hidden');
            if (video) {
                video.pause();
            }
        });
    }
    
    if (backdrop) {
        backdrop.addEventListener('click', () => {
            videoModal.classList.add('hidden');
            if (video) {
                video.pause();
            }
        });
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
    // Draw the cake
    drawStrawberryCake();
    
    // Add animation loop for candles
    setInterval(() => {
        drawStrawberryCake();
    }, 100);
    
    // Setup interactive elements
    setupEnvelope();
    setupMessageButton();
    setupVideoButton();
    setupKeyboardShortcuts();
});

// ============================================
// RESPONSIVE HANDLING
// ============================================

window.addEventListener('resize', () => {
    drawStrawberryCake();
});

