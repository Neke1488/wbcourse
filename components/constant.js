import goodShirt from '/images/item-1.jpg'
import goodCase from '/images/item-2.jpg'
import goodPencils from '/images/item-3.jpg'
import cardMaestro from '/images/maestro.svg'
import cardVisa from '/images/visa.svg'
import cardMasterCard from '/images/mastercard.svg'
import cardMir from '/images/mir.svg'

export
const userData = {
    delivery:{
        fromAddress: [
            {
                address: 'Бишкек, улица Табышалиева, 57',
            },
            {
                address: 'Бишкек, улица Жукеева-Пудовкина, 77/1',
            },
            {
                address: 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1',
            },
        ],
        toAddress: [
            {
                address: 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1', 
                rate: null,
                workHours: 'Ежедневно с 10 до 21',
            },
            {
                address: 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 22', 
                rate: 4.99,
                workHours: 'Ежедневно с 10 до 22',
            },
            {
                address: 'г. Бишкек, улица Табышалиева, д. 57', 
                rate: 4.87,
                workHours: 'Ежедневно с 9 до 21',
            },
        ]
    },
    cards: [
        {
            cardNumber: '1234 56•• •••• 1234', 
            cardDate: '01/30',
            cardIconUrl: cardMir,
        },
        {
            cardNumber: '1234 56•• •••• 1232', 
            cardDate: '01/30',
            cardIconUrl: cardVisa,
        },
        {
            cardNumber: '1234 56•• •••• 1231', 
            cardDate: '01/30',
            cardIconUrl: cardMasterCard,
        },
        {
            cardNumber: '1234 56•• •••• 1233', 
            cardDate: '01/30',
            cardIconUrl: cardMaestro,
        }
    ]
}

export
const userGoods = [
    {
        id: 1,
        image: goodShirt,
        name: 'Футболка UZcotton мужская',
        color: 'белый',
        size: 56,
        seller: 'Коледино WB',
        organization: 'ООО Вайлдберриз',
        organizationInformation: {
            organizationName: 'ООО «Вайлдберриз»',
            requisites: 'ОГРН: 5167746237148',
            organizationAddress: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34',
        },
        amount: 1,
        affordable: 2,
        dateOfDelivery: [
            {
                1: ['2023-02-05', '2023-02-06']
            }
        ],
        price: {
            discount: 50.3,
            discountUser: 10,
        },
        oldPrice: 1051
    },
    {
        id: 2,
        image: goodCase,
        name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
        color: 'прозрачный',
        size: null,
        seller: 'Коледино WB',
        organization: 'OOO Мегапрофстиль',
        organizationInformation: {
            organizationName: 'OOO «МЕГАПРОФСТИЛЬ»',
            requisites: 'ОГРН: 5167746237148',
            organizationAddress: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34',
        },
        amount: 200,
        affordable: 500,
        dateOfDelivery: [
            {
                184: ['2023-02-05', '2023-02-06'],
            },
            {
                16: ['2023-02-07', '2023-02-08'],
            }
        ],
        price: {
            discount: 8.7,
            discountUser: 10,
        },
        oldPrice: 10500
    },
    {
        id: 3,
        image: goodPencils,
        name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,Faber-Castell ',
        color: null,
        size: null,
        seller: 'Коледино WB',
        organization: 'ООО Вайлдберриз',
        organizationInformation: {
            organizationName: 'ООО «Вайлдберриз»',
            requisites: 'ОГРН: 5167746237148',
            organizationAddress: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34',
        },
        amount: 2,
        affordable: 2,
        dateOfDelivery: [
            {
                2: ['2023-02-05', '2023-02-06']
            }
        ],
        price: {
            discount: null,
            discountUser: 10,
        },
        oldPrice: 475,
    },
]

export 
const basketOptions = {
      accordFromBasketCountGoods: '.accord_hide_info[data-type="accord_count"]',
      accordFromBasketPriceOfGoods: '.accord_hide_info[data-type="accord_price"]',
      cardPay: '.icon_pay',
      cardNumber: '.payment_number',
      cardDate: '.payment_date',
      pointDelivery: '#delivery_point',
      typeDelivery: '.delivery_label[data-type="delivery_data"]',
      deliverySidebar: '.basket_choose_title[data-type="delivery-type"]',
      deliveryData: '.delivery_data',
      deliveryAddress: '.address_of_delivery',
      deliveryChooseAddressSidebar: '.basket_choose_address',
      deliveryRating: '.delivery_rate',
      deliveryHours: '.delivery_office_hours',
      hideDeliveryData: 'delivery_hide_data',
      deliveryPlaceText: 'Пункт выдачи',
      deliveryTypeText: 'Курьером',
      deliveryTypeInSidebarText: 'Доставка в пункт выдачи',
      deliveryCourierInSidebarText: 'Доставка курьером',
      goodsHiddenList: '#goods_list_hide',
      goodsCheckboxAll: '.checkbox_goods[data-type="checkbox-all"]',
      goodsCheckboxAllRemove: '.checkbox_goods_check[data-type="checkbox_all_goods"]',
      basketPriceTotal: '#basket_price_total',
      basketCountTotal: '#basket_total_count',
      basketOldPriceTotal: '#basket_total_old_price',
      basketDiscount: '#basket_discount',
      basketChooseDataTotalDelivery: '.basket_choose_data[data-type="delivery_total_data"]',
      basketItemsAddedToDelivery: '.delivery_items',
      basketCheckboxSidebarPayment: '.basket_choose_checkbox[data-type="checkbox_sidebar_payment"]',
      basketCheckboxSidebarPaymentRemove: '.basket_choose_checkbox_redis[data-type="checkbox_sidebar_payment"]',
      basketButtonChooseTotalSubmit: '.basket_choose_btn[data-type="btn_sidebar_total_submit"]',
      counterForBasketGoods: '.header_basket_count[data-type="counter_basket"]',
      counterForMobile: '.navbar_mobile_icon_count[data-type="mobile_counter"]',
      chooseBasketButtonSmall: 'basket_choose_btn_lil',
}

export 
const popupVariants = {
    choosePayment: '.popup[data-type="popup_choose_pay"]',
    chooseAddress: '.popup[data-type="popup_choose_address"]',
};

export
const goodsOptions = {
    goodBlock: '#good',
    goodMissingBlock: '#good_missing',
    goodActiveList: '.good_item',
    goodMissing: '.good_item_missing',
    goodPicture: '.good_item_img',
    goodTitle: '.good_item_title',
    goodColor: '.good_item_property[data-type="good_color"]',
    goodSize: '.good_item_property[data-type="good_size"]',
    goodSellers: '.good_item_sellers',
    goodOrganizationName: '.organization_name',
    goodOrganizationNamePosition: '.organization_sell_name',
    goodOrganizationRequisites: '.organization__requisites',
    goodOrganizationAddress: '.organization_sell_address',
    goodCountLabel: '.good_item_count_number',
    goodAfford: '.good_item_valid',
    goodNewPrice: '.good_item_new_price',
    goodOldPrice: '.good_item_old_price',
    goodDiscountPrice: '.discount_label[data-type="good_discount"]',
    goodAllDiscountPrice: '.discount_item[data-type="good_discount"]',
    goodDiscountForPerson: '.discount_label[data-type="good_person_discount"]',
    goodAllDiscountPriceForPerson: '.discount_item[data-type="good_person_discount"]',
    goodFavouriteButton: '.good_item_icon_favorite',
    goodDeleteButton: '.good_item_icon_delete',
    goodIconActiveButton: 'active_button',
    goodCountButtonMinus: '.good_item_count_button_minus',
    goodCountButtonPlus: '.good_item_count_button_plus',
    goodInputCheckbox: '.checkbox_goods',
    goodInputRemove: '.checkbox_goods_check_item',
    goodTextForNewPrice: 'newprice_text_small_size',
    goodCountButtonOff: 'disable_for_button_count',
    goodPropertyForItem: '.good_item_properties',
    goodWrapForProp: '.good_item_property_wrap',
}

export
const card = {
    cardPlace: '#card',
    cardPosition: '.card',
    cardIcon: '.card_icon',
    cardList: '.card_list',
    cardNumber: '.card_number',
    cardListRem: '.card_list_rem',
}

export
const location = {
    locationPosition: '#location',
    locationDeliveryPoint: '#delivery_point',
    locationList: '.location',
    locationAddress: '.location_address',
    locationRating: '.location_rate',
    locationChoose: '.location_list',
    locationChooseRemove: '.location_list_rem',
    locationDelete: '.location_delete',
}

export const goodContainer = '#list_of_goods',
      modalContainerForChoosePay = '#popup_choose_pay',
      modalContainerForChooseAddress = '#popup_choose_address',
      modalContainerForChooseLocation = '#popup_choose_pick_point',
      modalContainerForOtherLocation = '#popup_table_pick_point_block',
      choosePayButton = document.querySelector('.content_for_basket_up_btn[data-type="btn_choose_pay"]'),
      chooseAddressButton = document.querySelector('.content_for_basket_up_btn[data-type="choose_address_btn"]'),
      choosePaySidebar = document.querySelector('.basket_choose_btn_edit[data-type="button_sidebar_choose_pay"]'),
      chooseAddressSidebar = document.querySelector('.basket_choose_btn_edit[data-type="button_sidebar_address"]'),
      goodsTitles = ['товар', 'товара', 'товаров'],
      monthTitles = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
      basketView = document.forms['form_basket'],
      chooseItemsForDeliveryContainer = '.delivery_items';

export
const formActions = {
    form: '.form_popup',
    input: '.recipient_input',
    btnSumbit: '.basket_choose_btn',
    error: 'input_error_recipient_visible',
    inputError: 'input_error_recipient',
}
