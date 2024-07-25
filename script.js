document.getElementById('homeBtn').addEventListener('click', function() {
    showPanel('homePanel');
});

document.getElementById('contactBtn').addEventListener('click', function() {
    showPanel('contentPanel');
});

document.getElementById('creditsBtn').addEventListener('click', function() {
    showPanel('creditsPanel');
});

function showPanel(panelId) {
    var panels = document.querySelectorAll('.content-panel');
    panels.forEach(function(panel) {
        panel.classList.remove('active');
    });
    document.getElementById(panelId).classList.add('active');
}

// Show home panel by default
document.addEventListener('DOMContentLoaded', function() {
    showPanel('homePanel');
});
