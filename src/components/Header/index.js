import React from 'react';

/* Components */
import ItemMenu from '../ItemMenu';

/* Icons */
import {
  Cogs,
  DirectionsBus as DeltaIcon,
  ExternalLink as Link,
  Graph,
  History,
  PowerOff,
  ThList,
  Users,
} from '../../styles/Icons';

/* Styles */
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <div>
        <ItemMenu title="Usuários" icon={<Users width={20} height={20} />} />
        <ItemMenu title="Opções" icon={<Cogs width={20} height={20} />} />
        <ItemMenu title="Deltas" icon={<DeltaIcon width={20} height={20} />} />
        <ItemMenu title="Métricas" icon={<Graph width={20} height={20} />} />
        <ItemMenu title="Área externa" icon={<Link width={20} height={20} />} />
        <ItemMenu title="Histórico" icon={<History width={20} height={20} />} />
        <ItemMenu title="Cockpit" icon={<ThList width={20} height={20} />} />
      </div>

      <div>
        <ItemMenu title="Sair" icon={<PowerOff width={20} height={20} />} />
      </div>
    </Container>
  );
};

export default Header;
