module.exports = async ({ productRepository }) => {

    const res = await productRepository.getHomeComponent();
    urunBazli = []
    modulBazli = []
    yazlimBazli = []
    kontorBazli = []
    islemBazli = []
    destekBazli = []
    homeContainer = []
    res.forEach(element => {
        if (element.type === 0) {
            urunBazli.push(element)
        }
        else if (element.type === 1) {
            modulBazli.push(element)
        }
        else if (element.type === 2) {
            yazlimBazli.push(element)
        }
        else if (element.type === 3) {
            kontorBazli.push(element)
        }
        else if (element.type === 4) {
            islemBazli.push(element)
        }
        else if (element.type === 5) {
            destekBazli.push(element)
        }
        else {
            homeContainer.push(element)
        }

    });


    resData = {
        subContainer:
        {
            UrunBazli: urunBazli,
            ModulBazli: modulBazli,
            YazlimBazli: yazlimBazli,
            KontorBazli: kontorBazli,
            IslemBazli: islemBazli,
            DestekBazli: destekBazli
        },
        HomeContainer: homeContainer,
    }



    return resData
};