const products = {
   eco: {
      cup: {
         name: 'PLA Cup',
         items: {
            cup1: {
               name: 'A-YS-12YG (12oz)',
               material: ['PLA'],
               size: '96mm',
               quantity: 1000,
               img: 'eco/YS-12YG.jpg'
            },
            cup2: {
               name: 'A-YS-16YG (16oz)',
               material: ['PLA'],
               size: '96mm',
               quantity: 1000,
               img: 'eco/YS-16YG.jpg'
            },
            cup3: {
               name: 'A-YS-20YG (20oz)',
               material: ['PLA'],
               size: '96mm',
               quantity: 1000,
               img: 'eco/YS-20YG.jpg'
            },
            cup4: {
               name: 'A-YS-24YG (24oz)',
               material: ['PLA'],
               size: '96mm',
               quantity: 600,
               img: 'eco/YS-24YG.jpg'
            }
         }
      },
      lid: {
         name: 'PLA/CPLA Lid',
         items: {
            lid1: {
               name: 'A-F-96G',
               material: ['PLA'],
               size: '96mm',
               quantity: 1000,
               img: 'eco/F96G.jpg'
            },
            lid2: {
               name: 'A-D-96G',
               material: ['PLA'],
               size: '96mm',
               quantity: 1000,
               img: 'eco/D96G.jpg'
            },
            lid3: {
               name: 'A-D80C',
               material: ['CPLA'],
               size: '80mm',
               quantity: 1000,
               img: 'eco/D80C.jpg'
            },
            lid4: {
               name: 'A-D90C',
               material: ['PLA'],
               size: '90mm',
               quantity: 1000,
               img: 'eco/D90C.jpg'
            },
            lid5: {
               name: 'A-YS-90C',
               material: ['CPLA'],
               size: '90mm',
               quantity: 1000,
               img: 'eco/YS-90C.jpg'
            },
            lid6: {
               name: 'A-YS-115C',
               material: ['CPLA'],
               size: '115mm',
               quantity: 1000,
               img: 'eco/YS-115C.jpg'
            }
         }
      },
      deliContainer: {
         name: 'PLA Deli Container',
         items: {
            deli1: {
               name: 'A-YS-08RG',
               material: ['PLA'],
               size: '117mm',
               quantity: 500,
               img: 'eco/YS-08RG.jpg'
            },
            deli2: {
               name: 'A-YS-12RG',
               material: ['PLA'],
               size: '117mm',
               quantity: 500,
               img: 'eco/YS-12RG.jpg'
            },
            deli3: {
               name: 'A-YS-16RG',
               material: ['PLA'],
               size: '117mm',
               quantity: 500,
               img: 'eco/YS-16RG.jpg'
            },
            deli4: {
               name: 'A-YS-24RG',
               material: ['PLA'],
               size: '117mm',
               quantity: 500,
               img: 'eco/YS-24RG.jpg'
            },
            deli5: {
               name: 'A-YS-32RG',
               material: ['PLA'],
               size: '117mm',
               quantity: 500,
               img: 'eco/YS-32RG.jpg'
            }
         }
      },
      container: {
         name: 'PLA Container',
         items: {
            container1: {
               name: 'A-YS-003B',
               material: ['PLA'],
               size: 'L:182mm, W:120mm, H:85mm',
               quantity: 400,
               img: 'eco/YS-003B (PLA).jpg'
            },
            container2: {
               name: 'A-YS-16',
               material: ['PLA'],
               size: 'L:214mm, W:148mm, H:17mm',
               quantity: 1000,
               img: 'eco/YS-16.jpg'
            }
         }
      },
      others: {
         name: 'Others',
         items: {
            straw: {
               name: 'Straw',
               material: ['PLA'],
               size: '6 / 8 / 12mmX21cm',
               quantity: 6000,
               img: 'eco/straw.jpg'
            },
            utensils: {
               name: 'Knife, Fork, Spoon',
               material: ['CPLA'],
               size: '165mm',
               quantity: 2000,
               img: 'eco/Knife&Fork&Spoon.jpg'
            },
         }
      }
   },
   coldDrink: {
      lid: {
         name: 'Cold Drink Cup Lid',
         items: {
            lid1: {
               name: 'A-F-92',
               material: ['PET', 'PLA'],
               size: '92mm',
               quantity: 1000,
               img: 'coldDrink/F-92.jpg'
            },
            lid2: {
               name: 'A-C5C',
               material: ['PET'],
               size: '95mm',
               quantity: 2000,
               img: 'coldDrink/C5C.jpg'
            },
            lid3: {
               name: 'A-F-98',
               material: ['PET', 'PLA'],
               size: '98mm',
               quantity: 1000,
               img: 'coldDrink/F-98.jpg'
            },
            lid4: {
               name: 'A-D-92',
               material: ['PET', 'PLA'],
               size: '92mm',
               quantity: 1000,
               img: 'coldDrink/D92.jpg'
            },
            lid5: {
               name: 'A-C5BH',
               material: ['PET'],
               size: '95mm',
               quantity: 2000,
               img: 'coldDrink/C5BH.jpg'
            },
            lid6: {
               name: 'A-D-98',
               material: ['PET', 'PLA'],
               size: '98mm',
               quantity: 1000,
               img: 'coldDrink/D-98.jpg'
            }
         }
      },
      ppCup1: {
         name: 'PP Cup Series 1',
         items: {
            cup11: {
               name: 'A-YS-500V (16oz)',
               material: ['PP'],
               size: '90mm',
               quantity: 1000,
               img: 'coldDrink/YS-500V.jpg'
            },
            cup12: {
               name: 'A-YS-660V (22oz)',
               material: ['PP'],
               size: '90mm',
               quantity: 1000,
               img: 'coldDrink/YS-660V.jpg'
            },
            cup13: {
               name: 'A-YS-180P (6oz)',
               material: ['PP'],
               size: '70mm',
               quantity: 2400,
               img: 'coldDrink/YS-180P.jpg'
            },
            cup14: {
               name: 'A-AO-360H (12oz)',
               material: ['PP'],
               size: '95mm',
               quantity: 2000,
               img: 'coldDrink/AO-360H.jpg'
            },
            cup15: {
               name: 'A-AO-500H (16oz)',
               material: ['PP'],
               size: '95mm',
               quantity: 2000,
               img: 'coldDrink/AO-500H.jpg'
            },
            cup16: {
               name: 'A-AO-700H (24oz)',
               material: ['PP'],
               size: '95mm',
               quantity: 1000,
               img: 'coldDrink/AO-700H.jpg'
            }
         }
      },
      ppCup2: {
         name: 'PP Cup Series 2',
         items: {
            cup21: {
               name: 'A-YS-360Y (12oz)',
               material: ['PP'],
               size: '95mm',
               quantity: 2000,
               img: 'coldDrink/YS-360Y.jpg'
            },
            cup22: {
               name: 'A-YS-500Y (16oz)',
               material: ['PP'],
               size: '95mm',
               quantity: 2000,
               img: 'coldDrink/YS-500Y.jpg'
            },
            cup23: {
               name: 'A-YS-500Q (16oz)',
               material: ['PP'],
               size: '95mm',
               quantity: 1000,
               img: 'coldDrink/YS-500Q.jpg'
            },
            cup24: {
               name: 'A-YS-700Y (24oz)',
               material: ['PP'],
               size: '95mm',
               quantity: 1000,
               img: 'coldDrink/YS-700Y.jpg'
            },
            cup25: {
               name: 'A-YS-1000H (32oz)',
               material: ['PP'],
               size: '112mm',
               quantity: 500,
               img: 'coldDrink/YS-1000H.jpg'
            }
         }
      },
      petplaCup1: {
         name: 'PET/PLA Cup Series 1',
         items: {
            cup11: {
               name: 'A-YS-14T (14oz)',
               material: ['PET', 'PLA'],
               size: '98mm',
               quantity: 1000,
               img: 'coldDrink/YS-14T.jpg'
            },
            cup12: {
               name: 'A-YS-16T (16oz)',
               material: ['PET', 'PLA'],
               size: '98mm',
               quantity: 1000,
               img: 'coldDrink/YS-16T.jpg'
            },
            cup13: {
               name: 'A-YS-20T (20oz)',
               material: ['PET', 'PLA'],
               size: '98mm',
               quantity: 1000,
               img: 'coldDrink/YS-20T.jpg'
            },
            cup14: {
               name: 'A-YS-24T (24oz)',
               material: ['PET', 'PLA'],
               size: '98mm',
               quantity: 600,
               img: 'coldDrink/YS-24T.jpg'
            }
         }
      },
      petplaCup2: {
         name: 'PET/PLA Cup Series 2',
         items: {
            cup21: {
               name: 'A-YS-12S (12oz)',
               material: ['PET', 'PLA'],
               size: '92mm',
               quantity: 1000,
               img: 'coldDrink/YS-12S.jpg'
            },
            cup22: {
               name: 'A-YS-16S (16oz)',
               material: ['PET', 'PLA'],
               size: '92mm',
               quantity: 1000,
               img: 'coldDrink/YS-16S.jpg'
            },
            cup23: {
               name: 'A-YS-20S (20oz)',
               material: ['PET', 'PLA'],
               size: '92mm',
               quantity: 1000,
               img: 'coldDrink/YS-20S.jpg'
            }
         }
      }
   },
   paperCup: {
      coffeeLid: {
         name: 'Coffee Cup Lid',
         items: {
            lid1: {
               name: 'A-D80',
               material: ['PS'],
               size: '80mm',
               quantity: 1000,
               img: 'paperCup/D80.jpg'
            },
            lid2: {
               name: 'A-D80A',
               material: ['PS'],
               size: '80mm',
               quantity: 1000,
               img: 'paperCup/D80A.jpg'
            },
            lid3: {
               name: 'A-D90',
               material: ['PS'],
               size: '90mm',
               quantity: 1000,
               img: 'paperCup/D90.jpg'
            },
            lid4: {
               name: 'A-D90A',
               material: ['PS'],
               size: '90mm',
               quantity: 1000,
               img: 'paperCup/D90A.jpg'
            },
            lid5: {
               name: 'A-OD80',
               material: ['PP'],
               size: '80mm',
               quantity: 1000,
               img: 'paperCup/OD80.jpg'
            },
            lid6: {
               name: 'A-OD90',
               material: ['PP'],
               size: '90mm',
               quantity: 1000,
               img: 'paperCup/OD90.jpg'
            },
            lid7: {
               name: 'A-D90C',
               material: ['CPLA'],
               size: '90mm',
               quantity: 1000,
               img: 'paperCup/D90C.jpg'
            }
         }
      },
      coffeeCup: {
         name: 'Coffee Cup',
         items: {
            cup1: {
               name: '8oz Coffee Cup',
               material: ['PAPER'],
               size: '80mm',
               quantity: 1000,
               img: 'paperCup/8-coffee-cup.jpg'
            },
            cup2: {
               name: '10oz Coffee Cup',
               material: ['PAPER'],
               size: '90mm',
               quantity: 1000,
               img: 'paperCup/10-coffee-cup.jpg'
            },
            cup3: {
               name: '12oz Coffee Cup',
               material: ['PAPER'],
               size: '90mm',
               quantity: 1000,
               img: 'paperCup/12-coffee-cup.jpg'
            },
            cup4: {
               name: '16oz Coffee Cup',
               material: ['PAPER'],
               size: '90mm',
               quantity: 1000,
               img: 'paperCup/16-coffee-cup.jpg'
            },
            cup5: {
               name: '20oz Coffee Cup',
               material: ['PAPER'],
               size: '90mm',
               quantity: 1000,
               img: 'paperCup/20-coffee-cup.jpg'
            }
         }
      },
      coldDrinkPaperLid: {
         name: 'Cold Drink Paper Cup Lid',
         items: {
            coldLid1: {
               name: 'A-F-63',
               material: ['PS'],
               size: '63mm',
               quantity: 1000,
               img: 'paperCup/F-63.jpg'
            },
            coldLid2: {
               name: 'A-F-90 (PET)',
               material: ['PET'],
               size: '90mm',
               quantity: 2000,
               img: 'paperCup/F-90 (PET).jpg'
            },
            coldLid3: {
               name: 'A-F-90 (PS)',
               material: ['PS'],
               size: '90mm',
               quantity: 2000,
               img: 'paperCup/F-90 (PS).jpg'
            }
         }
      },
      slipperLid: {
         name: 'Slipper Lid',
         items: {
            slipLid1: {
               name: 'A-OD90SP',
               material: ['PP'],
               size: '90mm',
               quantity: 1000,
               img: 'paperCup/OD90SP.jpg'
            },
            slipLid2: {
               name: 'A-OD95',
               material: ['PP'],
               size: '95mm',
               quantity: 1000,
               img: 'paperCup/OD95.jpg'
            },
         }
      },
      coldDrinkPaperCup: {
         name: 'Cold Drink Paper Cup',
         items: {
            cup1: {
               name: '4oz Cold Drink Cup',
               material: ['PAPER'],
               size: '63mm',
               quantity: 2000,
               img: 'paperCup/4-cold-cup.jpg'
            },
            cup2: {
               name: '7oz Cold Drink Cup',
               material: ['PAPER'],
               size: '74mm',
               quantity: 2000,
               img: 'paperCup/7-cold-cup.jpg'
            },
            cup3: {
               name: '8oz Cold Drink Cup',
               material: ['PAPER'],
               size: '80mm',
               quantity: 1000,
               img: 'paperCup/8-cold-cup.jpg'
            },
            cup4: {
               name: '12oz Cold Drink Cup',
               material: ['PAPER'],
               size: '90mm',
               quantity: 1000,
               img: 'paperCup/12-cold-cup.jpg'
            },
            cup5: {
               name: '16oz Cold Drink Cup',
               material: ['PAPER'],
               size: '90mm',
               quantity: 1000,
               img: 'paperCup/16-cold-cup.jpg'
            },
            cup6: {
               name: '22oz Cold Drink Cup',
               material: ['PAPER'],
               size: '90mm',
               quantity: 1000,
               img: 'paperCup/22-cold-cup.jpg'
            }
         }
      }
   },
   foodContainer: {
      foodBox: {
         name: 'Food Box',
         items: {
            cover: {
               name: 'A-YS-1',
               material: ['OPS'],
               size: 'L:237mm, W:187mm, H:20mm',
               quantity: 800,
               img: 'foodContainer/YS-1.jpg'
            },
            box1: {
               name: 'A-YS-R94638F',
               name2: 'YS-R94638B',
               material: ['OPS'],
               material2: 'PP',
               size: 'L:205mm, W:175mm, H:60mm',
               quantity: 300,
               img: 'foodContainer/YS-R94638F.jpg'
            },
            box2: {
               name: 'A-YS-R-0466H',
               name2: 'YS-R-04636',
               material: ['OPS', 'PET'],
               material2: 'PP',
               size: 'L:235mm, W:200mm, H:65mm',
               quantity: 250,
               img: 'foodContainer/YS-R-0466H.jpg'
            },
            box3: {
               name: 'A-YS-R-0467H',
               name2: 'YS-R-04637',
               material: ['OPS', 'PET'],
               material2: 'PP',
               size: 'L:235mm, W:200mm, H:65mm',
               quantity: 250,
               img: 'foodContainer/YS-R-0467H.jpg'
            },
            box4: {
               name: 'A-YS-R-0468H',
               name2: 'YS-R-04638',
               material: ['OPS', 'PET'],
               material2: 'PP',
               size: 'L:235mm, W:200mm, H:65mm',
               quantity: 250,
               img: 'foodContainer/YS-R-0468H.jpg'
            },
            box5: {
               name: 'A-YS-4C 022',
               material: ['PP'],
               size: 'L:225mm, W:175mm, H:35mm',
               quantity: 800,
               img: 'foodContainer/YS-4C 022.jpg'
            },
            box6: {
               name: 'A-YS-4C 129',
               material: ['PP'],
               size: 'L:225mm, W:175mm, H:35mm',
               quantity: 800,
               img: 'foodContainer/YS-4C 129.jpg'
            },
            box7: {
               name: 'A-YS-5C 036',
               material: ['PP'],
               size: 'L:225mm, W:175mm, H:35mm',
               quantity: 800,
               img: 'foodContainer/YS-5C 036.jpg'
            },
            box8: {
               name: 'A-YS-5C 028',
               name2: 'YS-5C 028 cover',
               material: ['PP'],
               material2: 'OPS',
               size: 'L: 270mm, W: 204mm,H: 52mm',
               quantity: 500,
               img: 'foodContainer/YS-5C 028.jpg'
            },
            box9: {
               name: 'A-YS-D28',
               material: ['PP'],
               size: 'ø179, H:60mm',
               quantity: 300,
               img: 'foodContainer/YS-D28.jpg'
            },
            box10: {
               name: 'A-YS-D36',
               material: ['PP'],
               size: 'ø179, H:77mm',
               quantity: 300,
               img: 'foodContainer/YS-D36.jpg'
            },
            box11: {
               name: 'A-YS-HC86828F',
               material: ['PP'],
               size: 'L:219mm, W:149mm, H:37mm',
               quantity: 300,
               img: 'foodContainer/YS-HC86828F.jpg'
            },
            box12: {
               name: 'A-YS-HC88838F',
               material: ['PP'],
               size: 'L:219mm, W:149mm, H:55mm',
               quantity: 300,
               img: 'foodContainer/YS-HC88838F.jpg'
            },
            box13: {
               name: 'A-YS-HC718',
               material: ['PP'],
               size: 'ø156, H:47mm',
               quantity: 300,
               img: 'foodContainer/YS-HC718.jpg'
            },
            box14: {
               name: 'A-YS-HC723',
               material: ['PP'],
               size: 'ø182, H:49mm',
               quantity: 300,
               img: 'foodContainer/YS-HC723.jpg'
            },
            box15: {
               name: 'A-YS-HC729',
               material: ['PP'],
               size: 'ø182, H:58mm',
               quantity: 300,
               img: 'foodContainer/YS-HC729.jpg'
            },
            box16: {
               name: 'A-YS-HC837',
               material: ['PP'],
               size: 'ø214, H:49mm',
               quantity: 300,
               img: 'foodContainer/YS-HC837.jpg'
            },
            box17: {
               name: 'A-YS-HC948',
               material: ['PP'],
               size: 'ø238, H:52mm',
               quantity: 400,
               img: 'foodContainer/YS-HC948.jpg'
            },
            box18: {
               name: 'A-YS-HC8316',
               material: ['PP'],
               size: 'L:198mm, W:133mm, H:38mm',
               quantity: 300,
               img: 'foodContainer/YS-HC8316.jpg'
            },
            box19: {
               name: 'A-YS-HC8322',
               material: ['PP'],
               size: 'L:198mm, W:133mm, H:54mm',
               quantity: 300,
               img: 'foodContainer/YS-HC8322.jpg'
            },
            box20: {
               name: 'A-YS-HC86828W',
               material: ['PP'],
               size: 'L:228mm, W:158mm, H:40mm',
               quantity: 300,
               img: 'foodContainer/YS-HC86828W.jpg'
            },
            box21: {
               name: 'A-YS-HC88838W',
               material: ['PP'],
               size: 'L:228mm, W:158mm, H:55mm',
               quantity: 300,
               img: 'foodContainer/YS-HC88838W.jpg'
            },
         }
      }
   },
   DeliContainer: {
      matchingLids: {
         name: 'Matching Lids',
         items: {
            lid1: {
               name: 'A-117 Deli Lid (PP)',
               material: ['PP'],
               size: '117mm',
               quantity: 500,
               img: 'deliContainer/117 deli lid_PP.jpg'
            },
            lid2: {
               name: 'A-117 Deli Lid (PET/PLA)',
               material: ['PET', 'PLA'],
               size: '117mm',
               quantity: 500,
               img: 'deliContainer/117 deli lid.jpg'
            }
         }
      },
      ppDeliContainer: {
         name: 'PP Deli Container',
         items: {
            container1: {
               name: 'A-117 Deli 8oz',
               material: ['PP'],
               size: '117mm',
               quantity: 500,
               img: 'deliContainer/117 deli 8 oz.jpg'
            },
            container2: {
               name: 'A-117 Deli 16oz',
               material: ['PP'],
               size: '117mm',
               quantity: 500,
               img: 'deliContainer/117 deli 16 oz.jpg'
            },
            container3: {
               name: 'A-117 Deli 32oz',
               material: ['PP'],
               size: '117mm',
               quantity: 500,
               img: 'deliContainer/117 deli 32 oz.jpg'
            }
         }
      },
      petplaDeliContainer: {
         name: 'PET/PLA Deli Container',
         items: {
            container1: {
               name: 'A-YS-08R',
               material: ['PET', 'PLA'],
               size: '117mm',
               quantity: 500,
               img: 'deliContainer/YS-08R.jpg'
            },
            container2: {
               name: 'A-YS-12R',
               material: ['PET', 'PLA'],
               size: '117mm',
               quantity: 500,
               img: 'deliContainer/YS-12R.jpg'
            },
            container3: {
               name: 'A-YS-16R',
               material: ['PET', 'PLA'],
               size: '117mm',
               quantity: 500,
               img: 'deliContainer/YS-16R.jpg'
            },
            container4: {
               name: 'A-YS-24R',
               material: ['PET', 'PLA'],
               size: '117mm',
               quantity: 500,
               img: 'deliContainer/YS-24R.jpg'
            },
            container5: {
               name: 'A-YS-32R',
               material: ['PET', 'PLA'],
               size: '117mm',
               quantity: 500,
               img: 'deliContainer/YS-32R.jpg'
            },
         }
      }
   },
   selfLockingContainer: {
      petplaContainer: {
         name: 'PET/PLA Container',
         items: {
            container1: {
               name: 'A-YS-01B',
               material: ['PET', 'PLA'],
               size: 'L:135mm, W:120mm, H:55mm',
               quantity: 500,
               img: 'selfLocking/YS-01B.jpg'
            },
            container2: {
               name: 'A-YS-02B',
               material: ['PET', 'PLA'],
               size: 'L:175mm, W:132mm, H:60mm',
               quantity: 500,
               img: 'selfLocking/YS-02B.jpg'
            },
            container3: {
               name: 'A-YS-003B',
               material: ['PET', 'PLA'],
               size: 'L:182mm, W:120mm, H:85mm',
               quantity: 400,
               img: 'selfLocking/YS-003B.jpg'
            },
            container4: {
               name: 'A-YS-04B',
               material: ['PET', 'PLA'],
               size: 'L:185mm, W:142mm, H:65mm',
               quantity: 400,
               img: 'selfLocking/YS-04B.jpg'
            },
            container5: {
               name: 'A-YS-05',
               material: ['PET', 'PLA'],
               size: 'L:197mm, W:185mm, H:27mm',
               quantity: 450,
               img: 'selfLocking/YS-05.jpg'
            },
            container6: {
               name: 'A-YS-06',
               material: ['PET', 'PLA'],
               size: 'L:200mm, W:185mm, H:30mm',
               quantity: 450,
               img: 'selfLocking/YS-06.jpg'
            },
            container7: {
               name: 'A-YS-08',
               material: ['PET', 'PLA'],
               size: 'L:180mm, W:165mm, H:35mm',
               quantity: 450,
               img: 'selfLocking/YS-08.jpg'
            },
            container8: {
               name: 'A-YS-02105',
               material: ['PET', 'PLA'],
               size: 'L:220mm, W:120mm, H:32mm',
               quantity: 400,
               img: 'selfLocking/YS-02105.jpg'
            },
         }
      }
   },
   opsFoodContainer: {
      opsContainer: {
         name: 'OPS Food Container',
         items: {
            container1: {
               name: 'A-YS-9H',
               material: ['OPS'],
               size: 'L:123mm, W:96mm, H:28mm',
               quantity: 2000,
               img: 'opsContainer/YS-9H.jpg'
            },
            container2: {
               name: 'A-YS-1H',
               material: ['OPS'],
               size: 'L:153mm, W:97mm, H:30mm',
               quantity: 2000,
               img: 'opsContainer/YS-1H.jpg'
            },
            container3: {
               name: 'A-YS-2H',
               material: ['OPS'],
               size: 'L:160mm, W:107mm, H:32mm',
               quantity: 2000,
               img: 'opsContainer/YS-2H.jpg'
            },
            container4: {
               name: 'A-YS-3H',
               material: ['OPS'],
               size: 'L:190mm, W:125mm, H:35mm',
               quantity: 2000,
               img: 'opsContainer/YS-3H.jpg'
            },
            container5: {
               name: 'A-YS-5H',
               material: ['OPS'],
               size: 'L:193mm, W:132mm, H:35mm',
               quantity: 1000,
               img: 'opsContainer/YS-5H.jpg'
            },
            container6: {
               name: 'A-YS-6H',
               material: ['OPS'],
               size: 'L:210mm, W:148mm, H:37mm',
               quantity: 1000,
               img: 'opsContainer/YS-6H.jpg'
            },
            container7: {
               name: 'A-YS-1L',
               material: ['OPS'],
               size: 'L:153mm, W:95mm, H:20mm',
               quantity: 2000,
               img: 'opsContainer/YS-1L.jpg'
            },
            container8: {
               name: 'A-YS-2L',
               material: ['OPS'],
               size: 'L:160mm, W:110mm, H:24mm',
               quantity: 2000,
               img: 'opsContainer/YS-2L.jpg'
            },
            container9: {
               name: 'A-YS-3L',
               material: ['OPS'],
               size: 'L:190mm, W:127mm, H:24mm',
               quantity: 2000,
               img: 'opsContainer/YS-3L.jpg'
            },
            container10: {
               name: 'A-YS-5L',
               material: ['OPS'],
               size: 'L:194mm, W:133mm, H:33mm',
               quantity: 1000,
               img: 'opsContainer/YS-5L.jpg'
            },
            container11: {
               name: 'A-YS-6L',
               material: ['OPS'],
               size: 'L:210mm, W:150mm, H:20mm',
               quantity: 1000,
               img: 'opsContainer/YS-6L.jpg'
            },
            container12: {
               name: 'A-S-1 (Dumpling Box)',
               material: ['OPS'],
               size: 'L:265mm, W:146mm, H:21mm',
               quantity: 1000,
               img: 'opsContainer/S-1 Dumpling box.jpg'
            },
            container13: {
               name: 'A-YS-HDG-1',
               material: ['OPS'],
               size: 'L:256mm, W:95mm, H:35mm',
               quantity: 300,
               img: 'opsContainer/YS-HDG-1.jpg'
            },
            container14: {
               name: 'A-YS-HDG-3',
               material: ['OPS'],
               size: 'L:205mm, W:58mm, H:35mm',
               quantity: 300,
               img: 'opsContainer/YS-HDG-3.jpg'
            },
            container15: {
               name: 'A-YS-313',
               material: ['OPS'],
               size: 'L:220mm, W:82mm, H:26mm',
               quantity: 900,
               img: 'opsContainer/YS-313.jpg'
            },
            container16: {
               name: 'A-YS-06',
               material: ['OPS'],
               size: 'L:200mm, W:185mm, H:30mm',
               quantity: 450,
               img: 'opsContainer/YS-06.jpg'
            },
            container17: {
               name: 'A-YS-08',
               material: ['OPS'],
               size: 'L:180mm, W:165mm, H:35mm',
               quantity: 1000,
               img: 'opsContainer/YS-08.jpg'
            },
         }
      }
   },
   soupIceCreamCup: {
      iceCreamCupLids: {
         name: 'Ice Cream Cup Lids',
         items: {
            lid1: {
               name: 'A-YS-75',
               material: ['PET'],
               size: '75mm',
               quantity: 1000,
               img: 'soupicecream/YS-75.jpg'
            },
            lid2: {
               name: 'A-YS-90',
               material: ['PET'],
               size: '90mm',
               quantity: 1000,
               img: 'soupicecream/YS-90.jpg'
            },
            lid3: {
               name: 'A-YS-96',
               material: ['PET'],
               size: '96mm',
               quantity: 1000,
               img: 'soupicecream/YS-96.jpg'
            },
            lid4: {
               name: 'A-YS-101',
               material: ['PET'],
               size: '101mm',
               quantity: 1000,
               img: 'soupicecream/YS-101.jpg'
            },
            lid5: {
               name: 'A-YS-112',
               material: ['PET'],
               size: '112mm',
               quantity: 1000,
               img: 'soupicecream/YS-112.jpg'
            },
            lid6: {
               name: 'A-YS-115',
               material: ['PET'],
               size: '115mm',
               quantity: 1000,
               img: 'soupicecream/YS-115.jpg'
            },
            lid7: {
               name: 'A-YS-127',
               material: ['PET'],
               size: '127mm',
               quantity: 1000,
               img: 'soupicecream/YS-127.jpg'
            },
            lid8: {
               name: 'A-YS-142',
               material: ['PET'],
               size: '142mm',
               quantity: 1000,
               img: 'soupicecream/YS-142.jpg'
            },
         }
      },
      soupCupLids: {
         name: 'Soup Cup Lids',
         items: {
            lid1: {
               name: 'A-YS-2632',
               material: ['PP'],
               size: '90mm',
               quantity: 2000,
               img: 'soupicecream/YS-2632.jpg'
            },
            lid2: {
               name: 'A-YS-390',
               material: ['PP'],
               size: '101mm',
               quantity: 1000,
               img: 'soupicecream/YS-390.jpg'
            },
            lid3: {
               name: 'A-YS-520',
               material: ['PP'],
               size: '112mm',
               quantity: 1000,
               img: 'soupicecream/YS-520.jpg'
            },
            lid5: {
               name: 'A-112',
               material: ['PP'],
               size: '112mm',
               quantity: 1000,
               img: 'soupicecream/112.jpg'
            },
            lid6: {
               name: 'A-520 DOME',
               material: ['PP'],
               size: '112mm',
               quantity: 1000,
               img: 'soupicecream/520 Dome.jpg'
            },
            lid7: {
               name: 'A-115',
               material: ['PP'],
               size: '115mm',
               quantity: 1000,
               img: 'soupicecream/115.jpg'
            },
            lid8: {
               name: 'A-YS-115C',
               material: ['CPLA'],
               size: '115mm',
               quantity: 1000,
               img: 'soupicecream/YS-115C.jpg'
            },
            lid9: {
               name: 'A-YS-6585',
               material: ['PP'],
               size: '127mm',
               quantity: 600,
               img: 'soupicecream/YS-6585.jpg'
            },
            lid10: {
               name: 'A-YS-8511',
               material: ['PP'],
               size: '142mm',
               quantity: 600,
               img: 'soupicecream/YS-8511.jpg'
            },
            lid11: {
               name: 'A-850 DOME',
               material: ['PP'],
               size: '142mm',
               quantity: 600,
               img: 'soupicecream/850 dome.jpg'
            },
            lid12: {
               name: 'A-YF-02',
               material: ['PP'],
               size: '142mm',
               quantity: 300,
               img: 'soupicecream/YF-02.jpg'
            },
            lid13: {
               name: 'A-YS-165',
               material: ['PP'],
               size: '165mm',
               quantity: 600,
               img: 'soupicecream/YS-165 dome.jpg'
            },
         }
      },
      soupIceCup: {
         name: 'Soup Cup / Ice Cream Cup',
         items: {
            cup1: {
               name: '8oz',
               material: ['PAPER'],
               size: '90mm',
               quantity: 1000,
               img: 'soupicecream/8oz.jpg'
            },
            cup2: {
               name: '10oz',
               material: ['PAPER'],
               size: '90mm',
               quantity: 1000,
               img: 'soupicecream/10oz.jpg'
            },
            cup3: {
               name: '12oz',
               material: ['PAPER'],
               size: '101mm',
               quantity: 1000,
               img: 'soupicecream/12oz.jpg'
            },
            cup4: {
               name: '16oz',
               material: ['PAPER'],
               size: '112mm',
               quantity: 1000,
               img: 'soupicecream/16oz.jpg'
            },
            cup4: {
               name: '20oz',
               material: ['PAPER'],
               size: '127mm',
               quantity: 600,
               img: 'soupicecream/20oz.jpg'
            },
            cup5: {
               name: '24oz',
               material: ['PAPER'],
               size: '142mm',
               quantity: 600,
               img: 'soupicecream/24oz.jpg'
            },
            cup6: {
               name: '28oz',
               material: ['PAPER'],
               size: '142mm',
               quantity: 600,
               img: 'soupicecream/28oz.jpg'
            },
            cup7: {
               name: '32oz',
               material: ['PAPER'],
               size: '142mm',
               quantity: 600,
               img: 'soupicecream/32oz.jpg'
            },
         }
      },
   },
   hotFoodBowl: {
      matchingLids: {
         name: 'Matching Lids',
         items: {
            lid1: {
               name: 'A-YS-C95',
               material: ['PP'],
               size: '95mm',
               quantity: 1000,
               img: 'hotBowl/YS-C95.jpg'
            },
            lid2: {
               name: 'A-YS-120',
               material: ['PP'],
               size: '120mm',
               quantity: 1000,
               img: 'hotBowl/YS-120.jpg'
            },
            lid3: {
               name: 'A-YS-142',
               material: ['PP'],
               size: '142mm',
               quantity: 600,
               img: 'hotBowl/YS-142.jpg'
            },
            lid4: {
               name: 'A-IL-179',
               material: ['PP'],
               size: '179mm',
               quantity: 300,
               img: 'hotBowl/IL-179.jpg'
            },
            lid5: {
               name: 'A-IL-1200',
               material: ['PP'],
               size: '197mm',
               quantity: 300,
               img: 'hotBowl/IL-1200.jpg'
            },
         }
      },
      bowl: {
         name: 'Hot Food Bowl',
         items: {
            bowl1: {
               name: '250P',
               material: ['PP'],
               size: '95mm',
               quantity: 1000,
               img: 'hotBowl/250P.jpg'
            },
            bowl3: {
               name: '400FBM',
               material: ['PP'],
               size: '120mm',
               quantity: 1000,
               img: 'hotBowl/400FBM.jpg'
            },
            bowl4: {
               name: '500FBM',
               material: ['PP'],
               size: '120mm',
               quantity: 1000,
               img: 'hotBowl/500FBM.jpg'
            },
            bowl5: {
               name: '700FBM',
               material: ['PP'],
               size: '142mm',
               quantity: 600,
               img: 'hotBowl/700FBM.jpg'
            },
            bowl5: {
               name: '850FBM',
               material: ['PP'],
               size: '142mm',
               quantity: 600,
               img: 'hotBowl/850FBM.jpg'
            },
            bowl6: {
               name: '999FBM',
               material: ['PP'],
               size: '142mm',
               quantity: 600,
               img: 'hotBowl/999FBM.jpg'
            },
            bowl7: {
               name: '1100FBM',
               material: ['PP'],
               size: '179mm',
               quantity: 300,
               img: 'hotBowl/1100FBM.jpg'
            },
            bowl8: {
               name: '800P',
               material: ['PP'],
               size: '179mm',
               quantity: 300,
               img: 'hotBowl/800P.jpg'
            },
            bowl9: {
               name: '1000P',
               material: ['PP'],
               size: '179mm',
               quantity: 300,
               img: 'hotBowl/1000P.jpg'
            },
            bowl10: {
               name: '1200P',
               material: ['PP'],
               size: '197mm',
               quantity: 300,
               img: 'hotBowl/1200P.jpg'
            },
         }
      }
   },
   freshTray: {
      plaTray: {
         name: 'PLA Tray',
         items: {
            tray1: {
               name: 'A-YS-504',
               material: ['PLA'],
               size: 'L:114mm, W:114mm, H:28mm',
               quantity: 1000,
               img: 'freshTray/YS-504.jpg'
            },
            tray2: {
               name: 'A-YS-12',
               material: ['PLA'],
               size: 'L:193mm, W:127mm, H:12mm',
               quantity: 1000,
               img: 'freshTray/YS-12.jpg'
            },
            tray3: {
               name: 'A-YS-16',
               material: ['PLA'],
               size: 'L:214mm, W:148mm, H:17mm',
               quantity: 1000,
               img: 'freshTray/YS-16.jpg'
            },
            tray4: {
               name: 'A-YS-25',
               material: ['PLA'],
               size: 'L:152mm, W:121mm, H:33mm',
               quantity: 1000,
               img: 'freshTray/YS-25.jpg'
            },
            tray5: {
               name: 'A-YS-26',
               material: ['PLA'],
               size: 'L:186mm, W:120mm, H:28mm',
               quantity: 1000,
               img: 'freshTray/YS-26.jpg'
            },
            tray6: {
               name: 'A-YS-27',
               material: ['PLA'],
               size: 'L:193mm, W:152mm, H:32mm',
               quantity: 1000,
               img: 'freshTray/YS-27.jpg'
            },
            tray7: {
               name: 'A-YS-28',
               material: ['PLA'],
               size: 'L:230mm, W:145mm, H:32mm',
               quantity: 1000,
               img: 'freshTray/YS-28.jpg'
            },
            tray8: {
               name: 'A-YS-64',
               material: ['PLA'],
               size: 'L:215mm, W:138mm, H:27mm',
               quantity: 1000,
               img: 'freshTray/YS-64.jpg'
            },
            tray9: {
               name: 'A-YS-65',
               material: ['PLA'],
               size: 'L:242mm, W:182mm, H:28mm',
               quantity: 600,
               img: 'freshTray/YS-65.jpg'
            },
         }
      }
   },
   other: {
      others: {
         name: 'Others',
         items: {
            item1: {
               name: 'Spork',
               material: ['PS'],
               size: '130mm',
               quantity: 2000,
               img: 'others/spork.jpg'
            },
            item2: {
               name: 'Ice Cream Spoon',
               material: ['PP'],
               size: '85mm',
               quantity: 5000,
               img: 'others/ice cream spoon.jpg'
            },
            item3: {
               name: 'Slush Spoon',
               material: ['PS', 'CPLA'],
               size: '195mm',
               quantity: 2000,
               img: 'others/slush spoon.jpg'
            },
            item4: {
               name: 'Straw',
               material: ['PP', 'PLA'],
               size: '6mm x 21cm',
               quantity: 6000,
               img: 'eco/straw.jpg'
            },
            item5: {
               name: 'Bubble Tea Straw',
               material: ['PP'],
               size: '12mm x 21cm',
               quantity: 2800,
               img: 'others/bubble tea straw.jpg'
            },
            item6: {
               name: 'Knife&Fork&Spoon',
               material: ['PS'],
               size: '165mm',
               quantity: 2000,
               img: 'eco/Knife&Fork&Spoon.jpg'
            },
            item8: {
               name: 'A-YS Spoon',
               material: ['PS'],
               size: 'L:120mm, W:40mm, H:15mm',
               quantity: 5400,
               img: 'others/YS Spoon.jpg'
            },
            item10: {
               name: 'PP Round Spoon',
               material: ['PP'],
               size: 'L:136mm, W:34mm, H:11mm',
               quantity: 5400,
               img: 'others/PP round spoon.jpg'
            },
            item11: {
               name: 'PP Flat Spoon',
               material: ['PP'],
               size: 'L:138mm, W:37mm, H:11mm',
               quantity: 4000,
               img: 'others/PP flat spoon.jpg'
            },
            item13: {
               name: 'A-YS-402 Cups Holder',
               material: ['PP'],
               size: 'L:176mm, W:176mm, H:45mm',
               quantity: 1000,
               img: 'others/YS-402 Cups Holder.jpg'
            },
            item14: {
               name: 'A-YS141 Sauce Dish',
               material: ['PP'],
               size: 'ø75mm x18mm',
               quantity: 8000,
               img: 'others/YS-141.jpg'
            },
         }
      }
   }
}

export default products
