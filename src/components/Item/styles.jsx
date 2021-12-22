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
    card_content: {
        padding: '1.4em'
    },
    card_content_h2: {
        marginTop: 0,
        marginBottom: '.5em',
        fontWeight: 'bold'
    },
    card_content_p: {
        fontSize: '80%'
    }
}