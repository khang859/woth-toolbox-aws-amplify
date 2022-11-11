import {
  Toolbar,
  ToolbarAction,
  ToolbarActions,
  ToolbarTitle,
} from 'components/Toolbar';
import LayoutBackground from './LayoutBackground.jpg';
import styles from './Layout.module.css';
import { LayoutProps } from './types';

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div className={styles.Layout}>
      <Toolbar>
        <ToolbarTitle>Way Of The Hunter Toolbox</ToolbarTitle>
        <ToolbarActions>
          <ToolbarAction exact={false} href="/weapon-selector">
            Weapon Selector
          </ToolbarAction>
          <ToolbarAction href="/life-cycles">Animal Life Cycles</ToolbarAction>
        </ToolbarActions>
      </Toolbar>

      <div
        className={styles.LayoutBackground}
        style={{ backgroundImage: `url("${LayoutBackground.src}")` }}
      ></div>
      <div className={styles.LayoutContent}>{children}</div>
    </div>
  );
};
