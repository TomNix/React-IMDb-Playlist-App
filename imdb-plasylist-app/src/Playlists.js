import React from 'react'

const Playlists = () => {
    const userPlaylists = [];
    return (
        <div>
            {/* Load playlists - need single playlist component to pass data to */}
            { userPlaylists.length > 0 && <p>TODO</p>}
            { userPlaylists.length === 0 && <p>User has no current playlists</p>}
        </div>
    )
}

export default Playlists
