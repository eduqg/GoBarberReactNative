// Para colocar um linear-gradient em toda a aplicação
import LineardGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LineardGradient).attrs({
  colors: ['#7159c1', '#ab59c1'],
})`
  flex: 1;
`;
