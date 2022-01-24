var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
    $scope.init_index = function () {
        //-----------HEADER----------------------------------------------
        $scope.WebSite_Head_Name = "J And H Textiles";
        $scope.WebSite_Logo_src = "assets/img/logo.png";
        //---------------------------------------------------------------

        //-----------FEATURES--------------------------------------------
        $scope.features_list = [];

        temp_features_list = {};
        temp_features_list.FontAwesome = "fas fa-shipping-fast";
        temp_features_list.Header = "Free Shipping";
        temp_features_list.Body = "When order over $75";

        $scope.features_list.push(temp_features_list);
        $scope.features_list.push(temp_features_list);
        $scope.features_list.push(temp_features_list);
        //---------------------------------------------------------------

        //--------PRODUCTS-----------------------------------------------
        $scope.products_data = {};
        $scope.products_data.services_list = [];
        $scope.products_data.prodcuts_list = [];

        $scope.products_data.service_header = "Our Services"
        $scope.products_data.service_body = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio."

        temp_services_list = [];
        temp_services_list_obj1 = {};

        temp_services_list_obj1.image_link = "assets/img/products/dyeing.jpg"
        temp_services_list_obj1.Header = "Dyeing"
        temp_services_list_obj1.BigText = "85$"

        temp_services_list.push(temp_services_list_obj1);

        temp_services_list_obj2 = {};
        temp_services_list_obj2.image_link = "assets/img/products/printing.jpg"
        temp_services_list_obj2.Header = "Printing"
        temp_services_list_obj2.BigText = "85$"

        temp_services_list.push(temp_services_list_obj2);

        temp_services_list_obj4 = {};
        temp_services_list_obj4.image_link = "assets/img/products/fabrics.jpg"
        temp_services_list_obj4.Header = "Fabrics"
        temp_services_list_obj4.BigText = "85$"
        temp_services_list.push(temp_services_list_obj4);

        $scope.products_data.services_list = temp_services_list;



        $scope.products_data.product_header = "Our Products"
        $scope.products_data.product_body = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio."
        products_list = [];

        temp_products_list_obj1 = {};
        temp_products_list_obj1.image_link = "assets/img/products/bedsheet_1.png"
        temp_products_list_obj1.Header = "Bedsheets"
        temp_products_list_obj1.BigText = "85$"
        products_list.push(temp_products_list_obj1);

        temp_products_list_obj2 = {};
        temp_products_list_obj2.image_link = "assets/img/products/blanket.jpg"
        temp_products_list_obj2.Header = "Blankets"
        temp_products_list_obj2.BigText = "85$"
        products_list.push(temp_products_list_obj2);

        temp_products_list_obj3 = {};
        temp_products_list_obj3.image_link = "assets/img/products/comforter.jpg"
        temp_products_list_obj3.Header = "Comforters"
        temp_products_list_obj3.BigText = "85$"
        products_list.push(temp_products_list_obj3);

        temp_products_list_obj4 = {};
        temp_products_list_obj4.image_link = "assets/img/products/dohar.jpg"
        temp_products_list_obj4.Header = "Dohar"
        temp_products_list_obj4.BigText = "85$"
        products_list.push(temp_products_list_obj4);

        temp_products_list_obj5 = {};
        temp_products_list_obj5.image_link = "assets/img/products/duvet_cover.jpg"
        temp_products_list_obj5.Header = "Duvet Covers"
        temp_products_list_obj5.BigText = "85$"
        products_list.push(temp_products_list_obj5);

        temp_products_list_obj6 = {};
        temp_products_list_obj6.image_link = "assets/img/products/towel.jpg"
        temp_products_list_obj6.Header = "Towels"
        temp_products_list_obj6.BigText = "85$"
        products_list.push(temp_products_list_obj6);

        // towel.jpg.jpg

        $scope.products_data.products_list = products_list;
        //---------------------------------------------------------------

        //--------CERTIFICATES-------------------------------------------
        $scope.certificates_data = {};
        $scope.certificates_data.certificates_list = [];

        $scope.certificates_data.Header = "Our Certificates"
        $scope.certificates_data.Goals = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.";

        temp_certificates_list = [];
        temp_certificates_list_obj = {};

        temp_certificates_list_obj.image_link = "https://m.media-amazon.com/images/I/71+miIAZUVL._SL1424_.jpg";
        temp_certificates_list_obj.Header = "Certificate Header";

        temp_certificates_list.push(temp_certificates_list_obj);
        temp_certificates_list.push(temp_certificates_list_obj);
        temp_certificates_list.push(temp_certificates_list_obj);

        $scope.certificates_data.certificates_list = temp_certificates_list;
        //---------------------------------------------------------------

        //-----CAROUSEL--------------------------------------------------
        $scope.corousel_list = [];
        $scope.corousel_list.push("assets/img/company-logos/1.png");
        $scope.corousel_list.push("assets/img/company-logos/2.png");
        $scope.corousel_list.push("assets/img/company-logos/2.png");
        $scope.corousel_list.push("assets/img/company-logos/3.png");
        $scope.corousel_list.push("assets/img/company-logos/4.png");
        $scope.corousel_list.push("assets/img/company-logos/5.png");
        //---------------------------------------------------------------

        //-------MISSION/VISSION-----------------------------------------
        $scope.Mission_Vission = {};
        $scope.Mission_Vission.Year = "Since Year 1999";
        $scope.Mission_Vission.Mission = "A mission statement is a short statement of why an organization exists, what its overall goal is, identifying the goal of its operations: what kind of product or service it provides, its primary customers or market, and its geographical region of operation.";
        $scope.Mission_Vission.Vission = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.";
        $scope.Mission_Vission.Youtube_Video = "https://www.youtube.com/watch?v=vtsYSDub6h4";
        $scope.Mission_Vission.YoutubeThumbnail = "https://www.dexerto.com/wp-content/uploads/2021/09/08/Sidemen-launch-Side-plus-subscription-service.jpg";
        //---------------------------------------------------------------

        //----------TESTIMONAIL------------------------------------------
        $scope.Testimonail = [];

        temp_testimonail = {};
        temp_testimonail.Avatar = "https://kansai-resilience-forum.jp/wp-content/uploads/2019/02/IAFOR-Blank-Avatar-Image-1.jpg";
        temp_testimonail.ClientName = "Panjab Vadi Party";
        temp_testimonail.Client_Review = "Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
        temp_testimonail.LastIcon_fontAwesome = "fas fa-quote-right";

        $scope.Testimonail.push(temp_testimonail);
        $scope.Testimonail.push(temp_testimonail);
        $scope.Testimonail.push(temp_testimonail);
        $scope.Testimonail.push(temp_testimonail);
        //---------------------------------------------------------------

    };
});