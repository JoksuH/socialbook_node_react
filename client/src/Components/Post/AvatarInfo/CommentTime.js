import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles'

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row"

})

const Text = styled(Typography)({
    fontSize: 12,
  
  })
  


const FormatDate = (date) => {


  let splitDate = date.substring(0,date.length-5).split('T')
  return splitDate;

}


const AvatarInfo = ({data}) => {

  console.log(data)
  let formattedDate = FormatDate(data.dateAdded);

  return (
    <StyledBox >
        <Text variant='subtitle2'>
            {formattedDate[0] + ' @ ' + formattedDate[1]}
        </Text>


    </StyledBox>
  );
}

export default AvatarInfo;
