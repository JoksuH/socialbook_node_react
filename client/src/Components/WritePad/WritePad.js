import './WritePad.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const StyledButton = styled(Button)({
marginLeft: '45%'

})


const Writepad = ({OnPost, OnTextChange, Textvalue}) => {
    

    return (
        <div className="articleWriter">
            <form onSubmit={OnPost}>
                <TextField
                    multiline={false}
                    rows="3"
                    id="ArticleBodyText"
                    fullWidth={true}
                    variant="outlined"
                    label="Post"
                    value={Textvalue}
                    onChange={OnTextChange}
                />
                <br />
                <br />
                <div className="buttonRow" >
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        startIcon={<CloudUploadIcon />}
                    >
                        {' '}
                        Post!
                    </Button>
                </div>
            </form>
    
        </div>
    )
}

export default Writepad
