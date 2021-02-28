import { atom } from 'jotai';

const menuOpenStatus = atom(false);
const contactSuccessState = atom(false);
const contactErrorState = atom(false);
const backDropStatus = atom(false);

export { menuOpenStatus, contactSuccessState, contactErrorState,backDropStatus };
