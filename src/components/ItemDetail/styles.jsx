export const styles = {
    /* Flexbox stuff */
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    card: {
        background: 'white',
        marginBottom: '2em',
        flex: '0 1 24%'
    },
    card_a: {
        color: 'black',
        textDecoration: 'none'
    },
    card_a_hover: {
        boxShadow: '3px 3px 8px hsl(0, 0%, 80%)'
    },
    card_content_img: {
        float:'left',
        height:'60vmin',
        width: '40%'
    },
    card_content: {
        background: 'white',
        float:'left',
        height:'60vmin',
        width: '50%',
        padding: '20px'
    },
    card_content_h2: {
        marginTop: 0,
        marginBottom: '.5em',
        fontWeight: 'bold'
    },
    card_content_p: {
        fontSize: '1.5em'
    },
    card_content_detail: {
        textAlign: 'justify',
        justifyContent: 'space-between'
    },
    hover:{
        fontStyle: "italic",
        backgroundColor: "lightseagreen",
        textColor: 'white'
    }
}