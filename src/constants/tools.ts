import { Tool } from 'src/types/tool';
import * as Brash from 'src/components/tools/Brash';
import BrashNavigate from 'src/components/tools/BrashNavigate';

export type Tools = {
  [key: string]: Tool;
};

export const toolConfigs: Tools = {
  [Brash.key]: {
    icon: Brash.icon,
    Component: Brash.default,
    Navigate: BrashNavigate,
  },
  eraser: {
    icon: 'https://img.icons8.com/ios-filled/344/ffffff/eraser.png',
    Component: Brash.default,
    Navigate: BrashNavigate,
    props: {
      globalCompositeOperation: 'destination-out',
    },
  },
};

export type ToolKeys = keyof typeof toolConfigs;
