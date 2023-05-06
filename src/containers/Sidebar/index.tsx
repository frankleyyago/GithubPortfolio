import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { Description, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={18}>Yago Frankley</Title>
      <Paragraph type="secondary" fontSize={14}>
        frankleyyago
      </Paragraph>
      <Description type="main" fontSize={12}>
        Eng. Software
      </Description>
      <ThemeButton>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
