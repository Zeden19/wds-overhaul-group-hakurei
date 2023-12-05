export const shortcut = (node, params) => {
    let handler;
    const removeHandler = () => window.removeEventListener('keydown', handler),
        setHandler = () => {
        removeHandler();
        if (!params)
            return;
        handler = (e) => {
            console.log(!!params.control + " " + e.metaKey)
            if ((!!params.control !== e.shiftKey) ||
                (!!params.control !== (e.ctrlKey || e.metaKey)) ||
                params.code !== e.code)
                return;
            e.preventDefault();
            params.callback ? params.callback() : node.click();
        };
        window.addEventListener('keydown', handler);
    };
    setHandler();
    return {
        update: setHandler,
        destroy: removeHandler,
    };
};