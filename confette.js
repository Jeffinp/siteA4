// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Função para criar confetes
    function createConfetti() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        const confettiCount = 150; // Quantidade de confetes

        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                
                // Posição inicial aleatória no topo da tela
                const startX = Math.random() * window.innerWidth;
                confetti.style.left = startX + 'px';
                confetti.style.top = '-10px';
                
                // Cor aleatória
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                // Rotação aleatória
                const rotation = Math.random() * 360;
                confetti.style.transform = `rotate(${rotation}deg)`;
                
                document.body.appendChild(confetti);
                
                // Animação de queda
                const animation = confetti.animate([
                    { 
                        transform: `translate(0, 0) rotate(${rotation}deg)`,
                        opacity: 1 
                    },
                    { 
                        transform: `translate(${Math.random() * 200 - 100}px, ${window.innerHeight}px) rotate(${rotation + Math.random() * 360}deg)`,
                        opacity: 0
                    }
                ], {
                    duration: Math.random() * 2000 + 2000, // Duração entre 2-4 segundos
                    easing: 'cubic-bezier(.25,.46,.45,.94)'
                });
                
                // Remove o confete após a animação
                animation.onfinish = () => confetti.remove();
            }, Math.random() * 2000); // Delay aleatório para criar efeito em cascata
        }
    }

    // Reproduz o som de confete
    function playConfettiSound() {
        const audio = document.getElementById('confettiSound');
        if (audio) {
            audio.volume = 0.5; // Reduz o volume para 50%
            audio.play().catch(error => {
                console.log('Erro ao reproduzir som:', error);
            });
        }
    }

    // Inicia os confetes e o som quando a página carregar
    createConfetti();
    playConfettiSound();
    
    // Recria os confetes a cada 5 segundos (opcional)
    // setInterval(createConfetti, 5000);
});