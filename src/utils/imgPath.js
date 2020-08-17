import env from './env';

export function normalizeImgPath(name) {
    return `${env.APP_URL}/${name}`;
}