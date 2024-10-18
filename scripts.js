// Password protection
function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    if (password === 'MPRC') {
        document.getElementById('passwordContainer').style.display = 'none';
        document.getElementById('mainContainer').style.display = 'block';
    } else {
        document.getElementById('passwordMessage').innerText = 'Incorrect password. Please try again.';
    }
}

// Show selected section
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Realistic mock functionality for Playlist Submission Automation
function submitToPlaylists() {
    const songName = document.getElementById('songName').value;
    const spotifyLink = document.getElementById('spotifyLink').value;
    const songFile = document.getElementById('songFile').files[0];

    if (!songName || !spotifyLink || !songFile) {
        alert('Please provide all the required information.');
        return;
    }

    document.getElementById('playlistResult').innerText = 'Submitting to playlists...';

    // Simulated submission process
    setTimeout(() => {
        document.getElementById('playlistResult').innerText = 'Your song has been submitted!';
        document.getElementById('submittedPlaylists').style.display = 'block';

        // Mock list of playlists submitted to
        const playlists = [
            'Hip-Hop Heat',
            'Underground Vibes',
            'Rap Radar',
            'Trap Hits Daily',
            'New Music Friday',
            'Philly Underground Sounds'
        ];

        const playlistsList = document.getElementById('playlistsList');
        playlistsList.innerHTML = ''; // Clear previous list
        playlists.forEach(playlist => {
            const li = document.createElement('li');
            li.innerText = playlist;
            playlistsList.appendChild(li);
        });
    }, 2000);
}

// Mock functionality for Music Video Editing Suggestions
function getEditingSuggestions() {
    document.getElementById('videoEditingResult').innerText = 'Analyzing the music video...';
    setTimeout(() => {
        document.getElementById('videoEditingResult').innerText = 'Suggestions: Add slow-motion effects on the chorus, and cut to the beat at 1:15.';
    }, 2000);
}

// Mock functionality for Social Media Trends Tracker
function trackTrends() {
    document.getElementById('socialMediaResult').innerText = 'Tracking social media trends...';
    setTimeout(() => {
        document.getElementById('socialMediaResult').innerText = 'Trending hashtags: #NewMusicFriday, #RapChallenge, #UndergroundArtist';
    }, 2000);
}

