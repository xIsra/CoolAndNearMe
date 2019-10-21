import { getDistance } from "./location"

const GOOGLE_API_KEY = "AIzaSyDgHLkqOFD4nkK1oX5_Kl3Xx7E0e0jrQJg";

const placeTypes = ["bar", "cafe", "movie_theater", "night_club", "restaurant"];
const googlePhotoLink = (phref) => `https://maps.googleapis.com/maps/api/place/photo?photoreference=${phref}&maxwidth=640&key=${GOOGLE_API_KEY}`

export async function getPlaces(lat, lng) {
    // const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&opennow&types=food&key=${GOOGLE_API_KEY}`);
    const response = _PLACES_RESULT;
    if (response.status !== "OK")
        throw new Error("Unable to get places;");
    return response.results.map((v) => {

        return {
            location: v.geometry.location,
            id: v.id,
            name: v.name,
            photos: v.photos.map(ph => googlePhotoLink(ph.photo_reference)),
            place_id: v.place_id,
            rating: v.rating,
            price_level: v.price_level,
            distance: getDistance(v.geometry.location.lat, v.geometry.location.lng, lat, lng),

        }
    });
}








const _PLACES_RESULT = {
    "html_attributions": [],
    "next_page_token": "CqQCGgEAAC8_bSLtt-Sl9DjZMFnDcll9fV2jRQ28Bfxb9mv1Tp8UXOSzKZsuyO3yCT9_AmrvFXjCaJNOvGymmVk7EPUK9Zv1HJULasyIAloB9_Q-3DKIEa-n3i9UbCPOZycZuMkXvLTs-svuR8yHx5KSYF07EA57vJtYgJystYTUNVdx5OxmAeHzmxmq7LmpIAO_8bEDrsX7XQiNMil5xEG3MppMD3wtOax_8QOB82dhPIxXxCHxGj25NdLnkzYbrWauiJr-HGjS-ddsc8yk5_Q8oKdRfA_mgxfNT3ffyVex9uWQ2Zl5WVlVxd6-Icj7FUXSabCyUPEK54EIQKZTFTkEI1i0Za7ch5L0mxKaWt7OY3BgSeYSz2MRgASDtv0kIQML9v1e7xIQC5gMZfWCcK_CMbdY9xAZIxoUMRmdDlHvUOps0I3CDDqsjJWUt-g",
    "results": [
        {
            "geometry": {
                "location": {
                    "lat": 32.0651634,
                    "lng": 34.7713842
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.0664787802915,
                        "lng": 34.77274948029149
                    },
                    "southwest": {
                        "lat": 32.0637808197085,
                        "lng": 34.7700515197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
            "id": "5a7d9d5d20b40f8c2c84d97218690f3694797d74",
            "name": "Chef Hostel",
            "opening_hours": {
                "open_now": false
            },
            "photos": [
                {
                    "height": 1728,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/110403533841767576121/photos\"\u003eChef Hostel\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAAkwS8x9Q2RavBAux3sBjikN8CyL4tfquDDkHeVRWTzgHtNEH3pUvY2gGQMY8fxfXIo_xzDb01CFt6OXWBBKx7DDtDnzJK8ClwUYK8jYFavVxDlzp4YisxlqTF4vO0GqdZEhCpjVt_P6w-4-44K4DtalOyGhSWfx5tArHooxmboSPbEQS2IQ6vzQ",
                    "width": 2592
                }
            ],
            "place_id": "ChIJ-3hN34JMHRURZyDV9vkdNRY",
            "plus_code": {
                "compound_code": "3Q8C+3H Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q8C+3H"
            },
            "rating": 4.3,
            "reference": "ChIJ-3hN34JMHRURZyDV9vkdNRY",
            "scope": "GOOGLE",
            "types": [
                "night_club",
                "real_estate_agency",
                "bicycle_store",
                "travel_agency",
                "lodging",
                "bar",
                "restaurant",
                "food",
                "point_of_interest",
                "store",
                "establishment"
            ],
            "user_ratings_total": 67,
            "vicinity": "Montefiore Street 19, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.06307,
                    "lng": 34.77511399999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.0643796302915,
                        "lng": 34.7763758802915
                    },
                    "southwest": {
                        "lat": 32.0616816697085,
                        "lng": 34.7736779197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "56381ae635dca5a14997f03adeae9ea7f918c249",
            "name": "Radio EPGB",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 1365,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/113867758062505597400/photos\"\u003eRadio EPGB\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAAo56OBV7kNzHSMQNNsbCgv-QqSCTg5hvmeTXThXDj_4nfLswXoidhELsk9j0oM9u7703wLnyj5PKaikCVd67Ny9lccDjXLcl4UNI5iO0R9Q4oY_NS9VbFwStNHG-LkeiGEhCGsbTt3VjgRgWlTomznbrAGhTsOyIj2u0bHhWQeBQj6UBfZrgATw",
                    "width": 2048
                }
            ],
            "place_id": "ChIJgcDpsmJLHRURGpbhEDF0Oho",
            "plus_code": {
                "compound_code": "3Q7G+62 Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q7G+62"
            },
            "price_level": 2,
            "rating": 4.1,
            "reference": "ChIJgcDpsmJLHRURGpbhEDF0Oho",
            "scope": "GOOGLE",
            "types": ["night_club", "bar", "point_of_interest", "establishment"],
            "user_ratings_total": 416,
            "vicinity": "Shadal Street 7, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.0631459,
                    "lng": 34.7683656
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.0645407802915,
                        "lng": 34.7696769802915
                    },
                    "southwest": {
                        "lat": 32.0618428197085,
                        "lng": 34.7669790197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "eb8a08e7be31d80e13453515f1bdd9b2250a9f35",
            "name": "NG",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 427,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/101949037374321203170/photos\"\u003eNG\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAAX5KlJPHgnIA-7xF40MKS9Aluy1tl-9DjWjwkwJHcEcLi10SNXLtZJb8CUZDg-AM0uwU_II4IWYmrMr-pmVjpD1SL4FxyUhDqY2mYYPbPj4WHODZJku5W8cSwmRrEs1nCEhB3ATMfs4C_VHcxxSARH-3dGhSoOlKm7nqQ9CEiD0xZ4BU63BNKXw",
                    "width": 640
                }
            ],
            "place_id": "ChIJVV3QfJtMHRUR0VU4dFshJ7I",
            "plus_code": {
                "compound_code": "3Q79+78 Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q79+78"
            },
            "price_level": 3,
            "rating": 4.399999999999999,
            "reference": "ChIJVV3QfJtMHRUR0VU4dFshJ7I",
            "scope": "GOOGLE",
            "types": ["bar", "restaurant", "food", "point_of_interest", "establishment"],
            "user_ratings_total": 833,
            "vicinity": "Ahad Ha'Am Street 6, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.065167,
                    "lng": 34.77533249999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.0664849302915,
                        "lng": 34.77671983029149
                    },
                    "southwest": {
                        "lat": 32.0637869697085,
                        "lng": 34.7740218697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "0cec7dd6116c8401c5d015edbfab3e459d8521ee",
            "name": "Joselito",
            "photos": [
                {
                    "height": 567,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/103762310055345244123/photos\"\u003eJoselito\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAA9bw-GjZgS9lkDOir3IJxp_DN9jRq8cxV6B85UZg_LRir6OuFsKCpgsDfVwQI-S0xDunIWcRdDyTgWhyAf49DHZfWKrzXLKUTsPXeg56YX-udODFHd4o05CFDC1tl50ZtEhCFSFfxDBuz9gI52MIpb0-aGhRtQ91gR_foNQcSDjQRbQ-XWEdV1g",
                    "width": 567
                }
            ],
            "place_id": "ChIJpyVbc31LHRURwt1tIPJqjXo",
            "plus_code": {
                "compound_code": "3Q8G+34 Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q8G+34"
            },
            "reference": "ChIJpyVbc31LHRURwt1tIPJqjXo",
            "scope": "GOOGLE",
            "types": ["bar", "point_of_interest", "establishment"],
            "vicinity": "Ahad Ha'Am Street 39, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.0623008,
                    "lng": 34.772265
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.0637037302915,
                        "lng": 34.7736006802915
                    },
                    "southwest": {
                        "lat": 32.0610057697085,
                        "lng": 34.7709027197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "d92cb1bb428efccd52182641cb2b11fec8251745",
            "name": "Lima Lima bar",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/114848740162142924182/photos\"\u003eEliya Ozeri\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAAUOdoD6btLPbAGBJO-lQEhEjsmxsgah0v0CNHyOXJXOZHVeZBebNfhrxlSEZbUAzvzhg7V-pSi9VIIVhMsbEZBUbcTRIZ0MuAShNgGIC5teWoLziSaGDgwVlNh4djzYD0EhAAGx86hZCcc0JDdFBAIvUNGhQrGWEpfEMi9M7mZ6jP5KzYWmoNXw",
                    "width": 4032
                }
            ],
            "place_id": "ChIJu9XXEJ1MHRUR_-zJ3emWas8",
            "plus_code": {
                "compound_code": "3Q6C+WW Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q6C+WW"
            },
            "price_level": 2,
            "rating": 4,
            "reference": "ChIJu9XXEJ1MHRUR_-zJ3emWas8",
            "scope": "GOOGLE",
            "types": ["bar", "point_of_interest", "establishment"],
            "user_ratings_total": 707,
            "vicinity": "Lilienblum Street 42, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.06165190000001,
                    "lng": 34.768717
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.06300728029151,
                        "lng": 34.7701213302915
                    },
                    "southwest": {
                        "lat": 32.06030931970851,
                        "lng": 34.7674233697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "6876e97a4380171a35549568be14008f3570fafa",
            "name": "Hatraklin Meat & Wine Bistro",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/102544000237338574010/photos\"\u003eLuke Mass\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAAe_8tg8MsYDMJGRtRDd8QUWxGAfomcXkZJAT6uN6H6FDaPGK1upfd6Ut2w45rkWUu0e3o7Bg00P2mPIziRGsIL4rAYCxZnZ6v0C3rnqsm0vgOT-LYlIVOsOZsHfqWZY_6EhBXf6LQiNxqOf02feHGSBeqGhR07L9joLmrf5gw7XdlGDZ2crr8Cg",
                    "width": 4032
                }
            ],
            "place_id": "ChIJg7CkI4NMHRURojYVVcmGdiY",
            "plus_code": {
                "compound_code": "3Q69+MF Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q69+MF"
            },
            "price_level": 3,
            "rating": 4.3,
            "reference": "ChIJg7CkI4NMHRURojYVVcmGdiY",
            "scope": "GOOGLE",
            "types": ["bar", "restaurant", "food", "point_of_interest", "establishment"],
            "user_ratings_total": 945,
            "vicinity": "Heihal HaTalmud Street 4, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.0630058,
                    "lng": 34.7719226
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.0643975302915,
                        "lng": 34.7732556802915
                    },
                    "southwest": {
                        "lat": 32.0616995697085,
                        "lng": 34.7705577197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "414ce402d31ebcedebb28b637643b196980f6ffc",
            "name": "JIMMYWHO? Bar & Lounge",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 944,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/116636762863189161355/photos\"\u003eJIMMYWHO? Bar &amp; Lounge\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAARTVe0cVJO0Thf5QHszD1iJJqvLpnXpR4XjSfw8pFhJjtC_oxxV_uAX6CRGheOlHexHJVo4xgGGxMYWflYo9Y6KgsIyvvRM6InxY4UgeJRpXSYJYeBQffJuGWXzYWsj6aEhCl0GntceK_aFKmZjM7E_2uGhQycjoPY8216ZewKXkIe5FKgSx06g",
                    "width": 1414
                }
            ],
            "place_id": "ChIJ15hlI51MHRURCLZn_nCoAu0",
            "plus_code": {
                "compound_code": "3Q7C+6Q Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q7C+6Q"
            },
            "rating": 2.7,
            "reference": "ChIJ15hlI51MHRURCLZn_nCoAu0",
            "scope": "GOOGLE",
            "types": ["night_club", "bar", "point_of_interest", "establishment"],
            "user_ratings_total": 66,
            "vicinity": "Rothschild Boulevard 24, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.0634306,
                    "lng": 34.7715306
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.0647912802915,
                        "lng": 34.7729206802915
                    },
                    "southwest": {
                        "lat": 32.0620933197085,
                        "lng": 34.7702227197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "dd61d5ad7e8b9e0c754ea0e193816d4d56c2e0bd",
            "name": "בורדל",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 1000,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/113826306251248718059/photos\"\u003eבורדל\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRZAAAA2ZprGTsIKFIF0iBxCLNZ9uUn8rkHDKpLbr8K3hleGlfeLRitsul8OMePZmp2VeJFnawb_RhYHlOFr-R9V_U2ikYObgYH1epKb7XbxKjLgZYyPJGhvV5IuO3Av3LQmokIEhBq0t-KnGcsDaNkeS5qlFFmGhRid5PqZ_gi9umUHFb3CZ2Pq9zq1w",
                    "width": 1500
                }
            ],
            "place_id": "ChIJw0VjJp1MHRURLVqVgCPDM44",
            "plus_code": {
                "compound_code": "3Q7C+9J Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q7C+9J"
            },
            "price_level": 2,
            "rating": 4.3,
            "reference": "ChIJw0VjJp1MHRURLVqVgCPDM44",
            "scope": "GOOGLE",
            "types": ["bar", "point_of_interest", "establishment"],
            "user_ratings_total": 184,
            "vicinity": "Nahalat Binyamin Street 52, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.0617758,
                    "lng": 34.7747944
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.0630791802915,
                        "lng": 34.77616248029149
                    },
                    "southwest": {
                        "lat": 32.0603812197085,
                        "lng": 34.7734645197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "8c3b103c5d2a9f4200ad0425e333f8880fef347d",
            "name": "Levontin 7",
            "photos": [
                {
                    "height": 4000,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/107424782897820551894/photos\"\u003eУльяна Дикань\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAAGLinXWidiy5cORHAL1XkpChNppcwRi-jduBwrtDS6LuGFJ11LaNS1ZvDUfxc_GtkalWDikNx7Um88iAgDi6zsvXrDPa162QJ4W5JJvutmzTUDJwv3AkNQqp3I8nOs6yqEhCgFgZwu5YWGJhBtxgHyAQVGhSR08PbScpV1n5dIPPsZHUsu0Eveg",
                    "width": 3000
                }
            ],
            "place_id": "ChIJl6kBl2JLHRURF35i8RGKMIM",
            "plus_code": {
                "compound_code": "3Q6F+PW Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q6F+PW"
            },
            "price_level": 1,
            "rating": 4.3,
            "reference": "ChIJl6kBl2JLHRURF35i8RGKMIM",
            "scope": "GOOGLE",
            "types": ["bar", "point_of_interest", "establishment"],
            "user_ratings_total": 1230,
            "vicinity": "Levontin Street 7, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.0632474,
                    "lng": 34.7728829
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.0646467802915,
                        "lng": 34.7742128302915
                    },
                    "southwest": {
                        "lat": 32.0619488197085,
                        "lng": 34.7715148697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "5297ca731661dfe0c1a072bcaafd78e5a83fe0f4",
            "name": "Zoo Zoo",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 1365,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/115996111732332140608/photos\"\u003eזו זו | ZooZoo\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAADwH0VAh1XlpzJln_7UtSRO0MTHKs7QGD91zDHlR0AL3AwDTr1D8GIJnSAGDobmo4oSIqWIGW1VOma4iF1dvfYNU8GvHRch__cMecA0BCYkIasQnGFqycV97l1VJC-uyDEhCuVenNu5f4qFfEiVluvWfNGhQz-6b8KqMiTGeJqFHWjSkUet658Q",
                    "width": 2048
                }
            ],
            "place_id": "ChIJ4UdtSZ1MHRURCuAvEzrpi7Q",
            "plus_code": {
                "compound_code": "3Q7F+75 Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q7F+75"
            },
            "price_level": 2,
            "rating": 4,
            "reference": "ChIJ4UdtSZ1MHRURCuAvEzrpi7Q",
            "scope": "GOOGLE",
            "types": [
                "night_club",
                "bar",
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 471,
            "vicinity": "Rothschild Boulevard 32, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.063831,
                    "lng": 34.77316440000001
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.06511168029149,
                        "lng": 34.7745418802915
                    },
                    "southwest": {
                        "lat": 32.06241371970849,
                        "lng": 34.7718439197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "585ee6e56a65975dba7ef20bf99eeafbe01ee125",
            "name": "BuXa",
            "photos": [
                {
                    "height": 4032,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/110782472327286394316/photos\"\u003eClaire B\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAA85YmfE6aPwgqnNV3vSyDVBQZTrTgIFEqcRntIvsZyZoKA1EZJTpTg_yt0-xZjfSggFLDH0mrd5YMwj2cAt3PvxRxVTjsqXM5-ZiboGK2KOwaSGrhye0jZ3UPxfJug7xhEhDHOMEUY6j1Be6SdPSWqY4mGhQPtzqgDoeIGnwxCE06QQ54Z3IrXw",
                    "width": 3024
                }
            ],
            "place_id": "ChIJi2yyTJ1MHRURMCZ83se01wI",
            "plus_code": {
                "compound_code": "3Q7F+G7 Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q7F+G7"
            },
            "price_level": 2,
            "rating": 4.1,
            "reference": "ChIJi2yyTJ1MHRURMCZ83se01wI",
            "scope": "GOOGLE",
            "types": ["bar", "art_gallery", "point_of_interest", "store", "establishment"],
            "user_ratings_total": 366,
            "vicinity": "Rothschild Boulevard 31, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.0629419,
                    "lng": 34.7719619
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.06436748029149,
                        "lng": 34.77328238029149
                    },
                    "southwest": {
                        "lat": 32.0616695197085,
                        "lng": 34.7705844197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "fedb93b53f55fabce83f6316cf9462f91a83df16",
            "name": "Speakeasy | ספיק איזי",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 310,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/104342019832590649451/photos\"\u003eSpeakeasy | ספיק איזי\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAAIdbRxZLwmoEJwjTOM7CI_nBqIYmSIFyvr2BQegm9Xs9yklaW0-1ZCgyfWyRn8RWs5ycVpN6__V7PQ4RB8aa9yKwfK6A6XG2cMCLDylDURvo5aVbXNRGMJsllFvxYaavGEhBrjDYCkNhSKkKP7HTxG3kAGhQnullu4wAPnHhW2pKs4V8xgdbRRw",
                    "width": 466
                }
            ],
            "place_id": "ChIJBSRvI51MHRUROnMh2Iq-ONw",
            "plus_code": {
                "compound_code": "3Q7C+5Q Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q7C+5Q"
            },
            "price_level": 3,
            "rating": 3.9,
            "reference": "ChIJBSRvI51MHRUROnMh2Iq-ONw",
            "scope": "GOOGLE",
            "types": ["night_club", "bar", "point_of_interest", "establishment"],
            "user_ratings_total": 871,
            "vicinity": "Rothschild Boulevard 24, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.0640036,
                    "lng": 34.7740998
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.06534138029149,
                        "lng": 34.7754534802915
                    },
                    "southwest": {
                        "lat": 32.0626434197085,
                        "lng": 34.7727555197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "5246d2815138b27d47374ff3e2be92887bbb0dfb",
            "name": "Patrick's",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 720,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/115919929449201912922/photos\"\u003eBen Anter\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAAEU9Y3Np5ru_NXtKppxrjblBV7YCpkgLfKhEwo8CHRZXfD9iFwUUUSX32gvB8Ah5UM3JbPNFSeYCtZP76-VofIPkWsxfnYXGE4TzKFz-iOI4-eAFL_ryrTw5ITmr06fWsEhAIRUOVmeF4JYNK48qcCblmGhTRJELpXsamydyLfH4TTP-XHpHB0A",
                    "width": 1080
                }
            ],
            "place_id": "ChIJefEeWH1LHRURMLzgs_EVMgY",
            "plus_code": {
                "compound_code": "3Q7F+JJ Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q7F+JJ"
            },
            "price_level": 2,
            "rating": 3.9,
            "reference": "ChIJefEeWH1LHRURMLzgs_EVMgY",
            "scope": "GOOGLE",
            "types": ["bar", "restaurant", "food", "point_of_interest", "establishment"],
            "user_ratings_total": 592,
            "vicinity": "Rothschild Boulevard 39, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.0645721,
                    "lng": 34.7742578
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.0659782802915,
                        "lng": 34.7755826302915
                    },
                    "southwest": {
                        "lat": 32.0632803197085,
                        "lng": 34.7728846697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "b703297d43658f4bd429088274d294c00d0be823",
            "name": "Alphabet Club",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 994,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/107481531983569114076/photos\"\u003eAlphabet Club\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRZAAAAznF7VptSKCQ4StF9qR1NQOvWrod_7NzFAghHTXrmLupfPp3iUdHQ3YmVTHLS82i9vSbixHG_ik-XrGsS8yRhZDH0mSiQpoTt2QxHov0aUfwvgSE-79LT8McoPw3EBHRxEhC6gzQD1shy_kUzjMgkzQKyGhR7QPzo1TGf7DaGLl3V1hdDVZ5nqw",
                    "width": 1500
                }
            ],
            "place_id": "ChIJHeAiYX1LHRURUCjW30YlwpI",
            "plus_code": {
                "compound_code": "3Q7F+RP Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q7F+RP"
            },
            "price_level": 2,
            "rating": 4,
            "reference": "ChIJHeAiYX1LHRURUCjW30YlwpI",
            "scope": "GOOGLE",
            "types": ["night_club", "bar", "point_of_interest", "establishment"],
            "user_ratings_total": 171,
            "vicinity": "Ahad Ha'Am Street 54, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.0643857,
                    "lng": 34.7711368
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.0657477802915,
                        "lng": 34.7725305302915
                    },
                    "southwest": {
                        "lat": 32.0630498197085,
                        "lng": 34.7698325697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "05fe6854e3e796e12590da406a8dde0c292cd574",
            "name": "Flame Bar",
            "photos": [
                {
                    "height": 951,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/108794312010434502162/photos\"\u003eFlame bar - פליים בר\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAAeDpT4IXAPmP4eRQHhKqr9HBgI8-G-3kuFWLF8SEHl1I_aXQWXj6-3D4DXSIE8y4xIFGHN_OxzgXd1m5IOupvGZXXVKVtbd4js6FTMPYk3Z4JjyuGgpi-SYl9J5tR9cq9EhDoXxPPrrmxjZ-osHeesy3aGhSGho_o1BQXYuDpc3O-sR5Up5Gq2Q",
                    "width": 1268
                }
            ],
            "place_id": "ChIJwzxQKoNMHRURIEAMibotDYE",
            "plus_code": {
                "compound_code": "3Q7C+QF Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q7C+QF"
            },
            "price_level": 2,
            "rating": 4.3,
            "reference": "ChIJwzxQKoNMHRURIEAMibotDYE",
            "scope": "GOOGLE",
            "types": ["bar", "point_of_interest", "establishment"],
            "user_ratings_total": 252,
            "vicinity": "Nahalat Binyamin Street 42, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.0627167,
                    "lng": 34.775165
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.06394158029151,
                        "lng": 34.77645503029149
                    },
                    "southwest": {
                        "lat": 32.06124361970851,
                        "lng": 34.7737570697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "7e95446fe47c86d52850e8b3d490b4b881b87331",
            "name": "Ariellas house-Bar",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 1365,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/100043348414143861729/photos\"\u003eAriellas house-Bar\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAATMQUxc9C6d9XUXi_7JVWgMuWT08GTqPLRz0WDJuy1wA6-mWqRSp2PjatxySJPyI5UWnEnaFPBgSBd4ja2M89dX21Wnc4zo-yq7KNFVWb_qYSFQOpyRcO4kHozfqZ012kEhDnO0jSR9okr1pfHPg0DjVYGhQZhdqruLcu1ES2HHG6TnbT3U3ohQ",
                    "width": 2048
                }
            ],
            "place_id": "ChIJZbOntmJLHRURtmGXK5fswIE",
            "plus_code": {
                "compound_code": "3Q7G+33 Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q7G+33"
            },
            "price_level": 1,
            "rating": 4.5,
            "reference": "ChIJZbOntmJLHRURtmGXK5fswIE",
            "scope": "GOOGLE",
            "types": ["bar", "point_of_interest", "establishment"],
            "user_ratings_total": 86,
            "vicinity": "HaRakevet Street 2, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.0646455,
                    "lng": 34.7710601
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.0660028302915,
                        "lng": 34.7724375302915
                    },
                    "southwest": {
                        "lat": 32.0633048697085,
                        "lng": 34.7697395697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "9670d6dc4969246769797a887d9c0834a589c403",
            "name": "Dudu Bar",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 1600,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/107148061320770601663/photos\"\u003eDudu Bar\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAAvIEeZjueCwSOCVJIbG2QwRmQO35ptfPrAvK75asF5TNp4MjcCopK1SR6IX18pULoV3tA5QCvTYQAOCM8xLllhJ6ficuTVoQv_0Bas8_hTvyWe9054mRfoQpMgVewEHBOEhCciWuTdL1YEgxjdoV-eieiGhQKhp15aRvPFkePjacS4ThcYqGogg",
                    "width": 1200
                }
            ],
            "place_id": "ChIJI1JxKYNMHRURiB0EoCqdzy4",
            "plus_code": {
                "compound_code": "3Q7C+VC Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q7C+VC"
            },
            "price_level": 1,
            "rating": 4.6,
            "reference": "ChIJI1JxKYNMHRURiB0EoCqdzy4",
            "scope": "GOOGLE",
            "types": ["bar", "point_of_interest", "establishment"],
            "user_ratings_total": 110,
            "vicinity": "Nahalat Binyamin Street 40, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.0622202,
                    "lng": 34.7748855
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.06364318029151,
                        "lng": 34.7762107802915
                    },
                    "southwest": {
                        "lat": 32.06094521970851,
                        "lng": 34.7735128197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "4d58f4345fb1f8ca943c76d8376643a797e0e799",
            "name": "KULI ALMA",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 1667,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/114592461204705156994/photos\"\u003eKULI ALMA\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAAEMB8VelpXCO5yEo_3t_wWGbbGWgPhTy0nAtFA5wb_pFK5pxLobZ4k3CyKXp8GrtOmxkHZfEN2kilmUGilaj9viPckbR1crw20MA5FiGXp799zWWhABixW6hbteEhhX4VEhCphWbnPqnKq9tF_T25kwLVGhQNUagpU7BGi-4X2j-mR8rsYcb3dA",
                    "width": 2500
                }
            ],
            "place_id": "ChIJJRoJumJLHRURRDWUhyxCvYw",
            "plus_code": {
                "compound_code": "3Q6F+VX Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q6F+VX"
            },
            "price_level": 2,
            "rating": 4.199999999999999,
            "reference": "ChIJJRoJumJLHRURRDWUhyxCvYw",
            "scope": "GOOGLE",
            "types": [
                "night_club",
                "art_gallery",
                "bar",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 837,
            "vicinity": "Mikve Israel Street 10, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.0647505,
                    "lng": 34.7748554
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.0660969802915,
                        "lng": 34.7761960802915
                    },
                    "southwest": {
                        "lat": 32.0633990197085,
                        "lng": 34.7734981197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            "id": "6ef056a6a93746a96cb8967f0869323cd8c5b1b4",
            "name": "October",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 1512,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/113729635419636583319/photos\"\u003eYanir Cohen\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAAwwkrwfvBmmX2629Ghksi6yupktVy3b-ABrkWPNQhVAd96xXbyu3UqhkGvEAo4Z5Wd7OZuljQXBont5BiO7SFoEzPwplyJ0Q2BUUk0VM1ED7VVZhA9OlzaN9GkD6q7uSxEhAsBNKNWuafoKNvUeMX8ww7GhQIbYmIwQ1tZK5JfQngL3vcVI6WGQ",
                    "width": 2688
                }
            ],
            "place_id": "ChIJ39Kcb31LHRURtwuONSYOrZQ",
            "plus_code": {
                "compound_code": "3Q7F+WW Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q7F+WW"
            },
            "price_level": 2,
            "rating": 4.399999999999999,
            "reference": "ChIJ39Kcb31LHRURtwuONSYOrZQ",
            "scope": "GOOGLE",
            "types": ["bar", "point_of_interest", "establishment"],
            "user_ratings_total": 310,
            "vicinity": "Ahad Ha'Am Street 60, Tel Aviv-Yafo"
        },
        {
            "geometry": {
                "location": {
                    "lat": 32.0650328,
                    "lng": 34.7708859
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.06639318029151,
                        "lng": 34.77227413029149
                    },
                    "southwest": {
                        "lat": 32.06369521970851,
                        "lng": 34.7695761697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "4447e92eb30518318a2c4f7177a0837fcdc6fb18",
            "name": "Brut",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "\u003ca href=\"https://maps.google.com/maps/contrib/103811437477002174168/photos\"\u003eShahar Kahn\u003c/a\u003e"
                    ],
                    "photo_reference": "CmRaAAAA6hk4TJGroUF48BqZ8TlmGMERiWBtOYLibHBrqg0G3a45uUhw-IRSmLBhT2uEzHS12tc4ucrjSG83OJmYFTDMaN2kqqmvJDHB1aeOdysClZRLPx_ti6GL5QJeL_UuvdkLEhB8tfp-B9sGqLof0FyDiX3pGhRasplhClU9TMDLp6HIn4k76JgYhg",
                    "width": 4032
                }
            ],
            "place_id": "ChIJYzXhJYNMHRURAFoX45cIcCs",
            "plus_code": {
                "compound_code": "3Q8C+29 Tel Aviv-Yafo, Israel",
                "global_code": "8G4P3Q8C+29"
            },
            "price_level": 3,
            "rating": 4.199999999999999,
            "reference": "ChIJYzXhJYNMHRURAFoX45cIcCs",
            "scope": "GOOGLE",
            "types": ["restaurant", "bar", "food", "point_of_interest", "establishment"],
            "user_ratings_total": 385,
            "vicinity": "Nahalat Binyamin Street 36, Tel Aviv-Yafo"
        }
    ],
    "status": "OK"
}