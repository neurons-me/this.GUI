import ME from 'this.me';
import { mountApp } from './runtime';
import app from './app';

const me = new ME() as any;

mountApp({ me, app, target: '#root' });
