function getClassNames() {
  const supermarket = window.location.hostname;
  switch (supermarket) {
    case "www.tesco.ie":
      return {
        mainContentClass: ["body", "main__content"],
        productTileClasses: ["product-list--list-item"],
        tileProp: "textContent",
      };
    case "www.tesco.com":
      return {
        mainContentClass: ["body", "main__content"],
        productTileClasses: ["product-list--list-item"],
        tileProp: "textContent",
      };
    case "www.ocado.com":
      return {
        mainContentClass: ["app-page", "main-column"],
        productTileClasses: ["fops-item"],
        tileProp: "textContent",
      };
    case "shop.supervalu.ie":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-list-item"],
        tileProp: "textContent",
      };
    case "www.sainsburys.co.uk":
      return {
        mainContentClass: ["SRF__tileList", "shelfPage"],
        // in some cases i.e. pepsi the product tile class is "product"
        productTileClasses: ["pt-grid-item"],
        tileProp: "textContent",
      };
    case "groceries.asda.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["co-item"],
        tileProp: "textContent",
      };
    case "groceries.morrisons.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["fop-item"],
        tileProp: "textContent",
      };
    case "www.iceland.co.uk":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-tile"],
        tileProp: "textContent",
      };
    case "shop.jiffygrocery.co.uk":
      return {
        mainContentClass: ["w-100p w-min-320"],
        productTileClasses: ["product-item"],
        tileProp: "textContent",
      };
    case "groceries.aldi.co.uk":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-tile"],
        tileProp: "textContent",
      };
    case "www.amazon.co.uk":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.compraonline.bonpreuesclat.cat":
      return {
        mainContentClass: ["layout__Container-sc-1cgl98j-0"],
        productTileClasses: ["box__Box-sc-4y5e6z-0"],
        tileProp: "textContent",
      };
    case "www.dia.es":
      return {
        mainContentClass: ["pageType-ContentPage"],
        productTileClasses: ["product-list__item"],
        tileProp: "textContent",
      };
    case "www.alcampo.es":
      return {
        mainContentClass: ["body"],
        productTileClasses: [" productGridItemContainer "],
        tileProp: "innerText",
      };
    case "www.carrefour.es":
      return {
        mainContentClass: ["ebx-result-figure"],
        productTileClasses: ["ebx-result"],
        tileProp: "textContent",
      };
    case "www.dunnesstoresgrocery.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["ColListing-sc-lcurnl"],
        tileProp: "textContent",
      };
    case "freshonline.ie":
      return {
        mainContentClass: ["warehouse--v1"],
        productTileClasses: ["product-item"],
        tileProp: "innerText",
      };
    case "supermercado.eroski.es":
      return {
        mainContentClass: ["inbenta--eroski"],
        productTileClasses: ["product-item-lineal"],
        tileProp: "innerText",
      };
    case "www.waitrose.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["productPod___yz0mm"],
        tileProp: "textContent",
      };
    case "zakupy.auchan.pl":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["_48TB"],
        tileProp: "textContent",
      };
    case "www.frisco.pl":
      return {
        mainContentClass: ["catalog-page"],
        productTileClasses: ["product-box"],
        tileProp: "textContent",
      };
    case "www.alza.sk":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["browsingitem"],
        tileProp: "textContent",
      };
    case "www.mall.sk":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["category-products__item"],
        tileProp: "textContent",
      };
    case "potravinydomov.itesco.sk":
      return {
        mainContentClass: ["body", "main__content"],
        productTileClasses: ["product-list--list-item"],
        tileProp: "textContent",
      };
    case "www.kaufland.ro":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["t-search-result__list-item"],
        tileProp: "textContent",
      };
    case "carrefour.ro":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-item"],
        tileProp: "textContent",
      };
    case "www.mega-image.ro":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-item"],
        tileProp: "textContent",
      };
    case "produse.metro.ro":
      return {
        mainContentClass: ["body", "mfcss"],
        productTileClasses: ["mfcss_article-wrapper"],
        tileProp: "textContent",
      };
    case "www.auchan.ro":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["prefixbox-product-container"],
        tileProp: "textContent",
      };
    case "www.rewe.de":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-card"],
        tileProp: "textContent",
      };
    case "www.amazon.de":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.ca":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.es":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.fr":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.it":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.co.jp":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.in":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.cn":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.com.sg":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.com.mx":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.ae":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.com.br":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.nl":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.com.au":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.com.tr":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.sa":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.se":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.amazon.pl":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.flaschenpost.de":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["fp_product"],
        tileProp: "textContent",
      };
    case "www.bringmeister.de":
      return {
        mainContentClass: ["body", "css-vherbg"],
        productTileClasses: ["styles_productwrapper__2UcI7"],
        tileProp: "textContent",
      };
    case "www.lidl.de":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["s-grid__item"],
        tileProp: "textContent",
      };
    case "ecoop.ee":
      return {
        mainContentClass: ["products-wrapper"],
        productTileClasses: ["item"],
        tileProp: "textContent",
      };
    case "www.rimi.ee":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-grid__item"],
        tileProp: "textContent",
      };
    case "www.selver.ee":
      return {
        mainContentClass: ["body", "products-view"],
        productTileClasses: ["ProductCard"],
        tileProp: "textContent",
      };
    case "www.prismamarket.ee":
      return {
        mainContentClass: ["body", "page"],
        productTileClasses: ["item"],
        tileProp: "textContent",
      };
    case "barbora.lv":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["b-product--wrap2"],
        tileProp: "textContent",
      };
    case "www.rimi.lv":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-grid__item"],
        tileProp: "textContent",
      };
    case "etop.lv":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-grid"],
        tileProp: "textContent",
      };
    case "etoppiegade.lv":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-grid"],
        tileProp: "textContent",
      };
    case "rezekne.citro.lv":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product"],
        tileProp: "textContent",
      };
    case "ventspils.citro.lv":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product"],
        tileProp: "textContent",
      };
    case "www.drogas.lv":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["plp-product-grid__item"],
        tileProp: "textContent",
      };
    case "lastmile.lt":
      return {
        mainContentClass: ["body", "css-y2x73b"],
        productTileClasses: ["css-1o99j7c"],
        tileProp: "textContent",
      };
    case "parduotuve.ciamarket.lt":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-miniature"],
        tileProp: "textContent",
      };
    case "www.eurokos.lt":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["col-sm-4"],
        tileProp: "textContent",
      };
    case "vynoteka.lt":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-card__wrapper"],
        tileProp: "textContent",
      };
    case "www.rimi.lt":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-grid__item"],
        tileProp: "textContent",
      };
    case "www.k-ruoka.fi":
      return {
        mainContentClass: ["body", "product-search-result-list"],
        productTileClasses: ["bundle-list-item"],
        tileProp: "textContent",
      };
    case "www.alko.fi":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["mini-card-wrap"],
        tileProp: "textContent",
      };
    case "www.s-kaupat.fi":
      return {
        mainContentClass: ["body", "sc-1z3de1-1"],
        productTileClasses: ["sc-1ts9eyk-3"],
        tileProp: "textContent",
      };
    case "www.foodie.fi":
      return {
        mainContentClass: ["body", "js-products-container"],
        productTileClasses: ["item"],
        tileProp: "textContent",
      };
    case "www.tokmanni.fi":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["kuName"],
        tileProp: "textContent",
      };
    case "www.citygross.se":
      return {
        mainContentClass: [
          "body",
          "m-searchresultpage__content",
          "product-image",
        ],
        productTileClasses: ["productcard-container"],
        tileProp: "textContent",
      };
    case "www.coop.se":
      return {
        mainContentClass: ["body", "Section"],
        productTileClasses: ["Grid-cell"],
        tileProp: "textContent",
      };
    case "www.ica.se":
      return {
        mainContentClass: ["body", "sc-hxaKgE"],
        productTileClasses: ["sc-gIBoTZ"],
        tileProp: "textContent",
      };
    case "www.willys.se":
      return {
        mainContentClass: ["Gridstyles__StyledGrid-sc-p13gvi-0"],
        productTileClasses: ["Productstyles__StyledProduct-sc-16nua0l-0"],
        tileProp: "textContent",
      };
    case "www.hemkop.se":
      return {
        mainContentClass: ["body", "ax-layout-content"],
        productTileClasses: ["ax-product-grid-tile"],
        tileProp: "textContent",
      };
    case "www.hipercor.es":
      return {
        mainContentClass: ["more_results"],
        productTileClasses: ["grid-item"],
        tileProp: "textContent",
      };
    case "www.elcorteingles.es":
      return {
        mainContentClass: ["more_results"],
        productTileClasses: ["grid-item"],
        tileProp: "textContent",
      };
    case "www.costco.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product"],
        tileProp: "textContent",
      };
    case "www.walmart.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["w-25"],
        tileProp: "textContent",
      };
    case "www.target.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["ebNJlV"],
        tileProp: "textContent",
      };
    case "www.instacart.com":
      return {
        mainContentClass: ["body", "css-hshm0p"],
        productTileClasses: ["css-er4k5d"],
        tileProp: "textContent",
      };
    case "www.amazon.com":
      return {
        mainContentClass: ["a-aui_72554-c"],
        productTileClasses: ["s-result-item"],
        tileProp: "innerText",
      };
    case "www.google.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["sh-dgr__grid-result"],
        tileProp: "innerText",
      };
    case "www.kroger.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["AutoGrid-cell"],
        tileProp: "innerText",
      };
    case "www.wholefoodsmarket.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["w-pie--product-tile"],
        tileProp: "innerText",
      };
    case "www.harristeeter.com":
      return {
        mainContentClass: ["body", "PaginateItems"],
        productTileClasses: ["AutoGrid-cell"],
        tileProp: "innerText",
      };
    case "www.safeway.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["card"],
        tileProp: "innerText",
      };
    case "shop.foodlion.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-wrapper"],
        tileProp: "innerText",
      };
    case "www.albertsons.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["card"],
        tileProp: "innerText",
      };
    case "www.vons.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["card"],
        tileProp: "innerText",
      };
    case "www.jewelosco.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["card"],
        tileProp: "innerText",
      };
    case "www.acmemarkets.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["card"],
        tileProp: "innerText",
      };
    case "www.shaws.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["card"],
        tileProp: "innerText",
      };
    case "stopandshop.com":
      return {
        mainContentClass: ["body", "product-view-search"],
        productTileClasses: ["product-cell"],
        tileProp: "innerText",
      };
    case "giantfoodstores.com":
      return {
        mainContentClass: ["body", "product-view-search"],
        productTileClasses: ["product-cell"],
        tileProp: "innerText",
      };
    case "giantfood.com":
      return {
        mainContentClass: ["body", "product-view-search"],
        productTileClasses: ["product-cell"],
        tileProp: "innerText",
      };
    case "www.hannaford.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-impressions"],
        tileProp: "innerText",
      };
    case "megamarket.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClasses: ["ProductsBox__listItem"],
        tileProp: "textContent",
      };
    case "varus.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClasses: ["ProductsBox__listItem"],
        tileProp: "textContent",
      };
    case "novus.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClasses: ["ProductsBox__listItem"],
        tileProp: "textContent",
      };
    case "pchelka.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClasses: ["ProductsBox__listItem"],
        tileProp: "textContent",
      };
    case "eko.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClasses: ["ProductsBox__listItem"],
        tileProp: "textContent",
      };
    case "ultramarket.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClasses: ["ProductsBox__listItem"],
        tileProp: "textContent",
      };
    case "auchan.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClasses: ["ProductsBox__listItem"],
        tileProp: "textContent",
      };
    case "cosmos.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClasses: ["ProductsBox__listItem"],
        tileProp: "textContent",
      };
    case "tavriav.zakaz.ua":
      return {
        mainContentClass: ["body", "search-result"],
        productTileClasses: ["ProductsBox__listItem"],
        tileProp: "textContent",
      };
    case "auchan.ua":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["item_in_grid__2RO1F"],
        tileProp: "textContent",
      };
    case "fozzyshop.ua":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-miniature"],
        tileProp: "textContent",
      };
    case "megamarket.ua":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product"],
        tileProp: "textContent",
      };
    case "zakaz.atbmarket.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["catalog-item"],
        tileProp: "textContent",
      };
    case "shop.silpo.ua":
      return {
        mainContentClass: ["body", "product-list__wrapper"],
        productTileClasses: ["product-list-item"],
        tileProp: "textContent",
      };
    case "shop.nashkraj.ua":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["image_group"],
        tileProp: "textContent",
      };
    case "www.capraboacasa.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product"],
        tileProp: "textContent",
      };
    case "compraonline.e-leclerc.es":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["productos_producto-tarjetaV2"],
        tileProp: "textContent",
      };
    case "www.albertdomuzdarma.cz":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-item"],
        tileProp: "textContent",
      };
    case "www.lidl.cz":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["s-grid__item"],
        tileProp: "textContent",
      };
    case "nakup.itesco.cz":
      return {
        mainContentClass: ["body", "main__content"],
        productTileClasses: ["product-list--list-item"],
        tileProp: "textContent",
      };
    case "shop.iglobus.cz":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-item"],
        tileProp: "textContent",
      };
    case "www.tetadrogerie.cz":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["j-item"],
        tileProp: "textContent",
      };
    case "www.coursesu.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["grid-tile"],
        tileProp: "textContent",
      };
    case "www.carrefour.fr":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product-grid-item"],
        tileProp: "textContent",
      };
    case "www.intermarche.com":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["product"],
        tileProp: "textContent",
      };
    case "www.auchan.fr":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["list__item"],
        tileProp: "textContent",
      };
    case "www.franprix.fr":
      return {
        mainContentClass: ["body", "sf-p-cart"],
        productTileClasses: ["sf-vpc"],
        tileProp: "textContent",
      };
    case "www.monoprix.fr":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["grocery-item"],
        tileProp: "textContent",
      };
    case "drive.supermarchesmatch.fr":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["item-container"],
        tileProp: "textContent",
      };
    case "prom.ua":
      return {
        mainContentClass: ["body", "iVGEc"],
        productTileClasses: ["js-productad"],
        tileProp: "textContent",
      };
    case "rozetka.com.ua":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["catalog-grid__cell"],
        tileProp: "textContent",
      };
    case "ek.ua":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["touchcarousel-item"],
        tileProp: "textContent",
      };
    case "m.ua":
      return {
        mainContentClass: ["body"],
        productTileClasses: ["pict_txt"],
        tileProp: "textContent",
      };
    case "www.hepsiburada.com":
      return {
        mainContentClass: ["productListContent-pXUkO4iHa51o_17CBibU"],
        productTileClasses: [
                            "productListContent-zAP0Y5msy8OHn5z7T_K_",
                            "productListContent-DZbeDrMzX6R9iSLP7Mxt"
                          ],
        tileProp: "textContent",
      }
    case "www.trendyol.com":
      return {
        mainContentClass: ["prdct-cntnr-wrppr"],
        productTileClasses: ["p-card-wrppr", "search-store-advs-product-card"],
        tileProp: "textContent"
      }
    case "www.n11.com":
      return {
        mainContentClass: ["list-ul"],
        productTileClasses: ["columnContent"],
        tileProp: "textContent"
      }
    case "www.cimri.com":
      return {
        mainContentClass: ["body", "main__content"],
        productTileClasses: ["ProductList_productContainer__2JTlf", "z7ntrt-0"],
        tileProp: "textContent"
      }
    case "www.akakce.com":
      return {
        mainContentClass:["body"],
        productTileClasses: ["w", "p_v8"],
        productTileTags: ["li"],
        tileProp: "innerText"
      }
    default:
      return {
        mainContentClass: "",
        productTileClasses: "",
        tileProp: "",
      };
  }
}
