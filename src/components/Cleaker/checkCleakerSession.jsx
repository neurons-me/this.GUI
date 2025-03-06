import Cookies from 'js-cookie';

export function getCleakerSession() {
    const cleakerSession = Cookies.get('cleaker_session');

    if (cleakerSession) {
        return fetch(`https://api.cleaker.me/session`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: cleakerSession })
        })
        .then(res => res.ok ? res.json() : null)
        .catch(() => null);
    }
    return null;
}