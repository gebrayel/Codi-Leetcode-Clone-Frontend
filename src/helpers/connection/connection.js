const goBack = (history, setModal) => {
    setModal(false);
    history.goBack();
}

export default {
    goBack
}