export const infiniteScroll = ({setEndOfPage}) => {
    const d = document,
        w = window;

    w.addEventListener('scroll', () => {
        let { scrollTop, clientHeight, scrollHeight  } = d.documentElement;

        if(scrollTop + clientHeight >= scrollHeight-170){
            setEndOfPage(true);
            return
        }
    })
}