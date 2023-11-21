import React from "react";

import { Button, Img, Input, Line, Radio, Text } from "components";

const ClarifionUpsellPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <header className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-1 flex-row gap-2 items-start justify-center md:ml-[0] ml-[127px] md:mt-0 my-3.5 w-[16%] md:w-full">
            <Img
              className="h-[22px] w-[22px]"
              src="images/img_fluentcheckmar.svg"
              alt="fluentcheckmar"
            />
            <Text
              className="capitalize mt-[3px] text-white-A700 text-xs"
              size="txtManropeMedium12"
            >
              30-DAY SATISFACTION GUARANTEE
            </Text>
          </div>
          <div className="flex md:flex-1 flex-row gap-2 items-start justify-center md:ml-[0] ml-[114px] md:mt-0 my-3.5 w-[18%] md:w-full">
            <Img
              className="h-[22px] w-[22px]"
              src="images/img_phtrucklight.svg"
              alt="phtrucklight"
            />
            <Text
              className="mt-[3px] text-white-A700 text-xs uppercase"
              size="txtManropeMedium12"
            >
              Free delivery on orders over $40.00
            </Text>
          </div>
          <div className="flex md:flex-1 flex-row gap-2 items-start justify-center md:ml-[0] ml-[122px] md:mt-0 my-3.5 w-[13%] md:w-full">
            <Img
              className="h-[22px] w-[22px]"
              src="images/img_mdicardsheartoutline.svg"
              alt="mdicardsheartou"
            />
            <Text
              className="capitalize mt-[3px] text-white-A700 text-xs"
              size="txtManropeMedium12"
            >
              50.000+ HAPPY CUSTOMERS
            </Text>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row gap-2 items-start justify-center md:ml-[0] ml-[115px] mr-[137px] md:mt-0 my-3.5 w-[14%] md:w-full">
            <Img
              className="h-[22px] w-[22px]"
              src="images/img_fluentarrowsy.svg"
              alt="fluentarrowsy"
            />
            <Text
              className="sm:mt-0 mt-[3px] text-white-A700 text-xs uppercase"
              size="txtManropeMedium12"
            >
              100% Money Back Guarantee
            </Text>
          </div>
        </header>
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="bg-white-A700 flex sm:flex-col flex-row gap-2.5 items-center justify-between max-w-[1500px] mx-auto md:px-10 sm:px-5 px-[127px] py-[30px] w-full">
            <Img
              className="sm:flex-1 h-9 md:h-auto object-cover w-48 sm:w-full"
              src="images/img_600a41c73b670a9.png"
              alt="600a41c73b670aNine"
            />
            <Img
              className="h-8 w-[202px]"
              src="images/img_frame1484578056.svg"
              alt="frame1484578056"
            />
          </div>
          <div className="flex flex-col gap-6 items-center justify-start mt-[-20.52px] mx-auto w-auto z-[1]">
            <Text
              className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-auto"
              size="txtManropeRegular48"
            >
              Wait ! your order in progress.
            </Text>
            <Text
              className="capitalize text-2xl md:text-[22px] text-blue_gray-700 sm:text-xl w-auto"
              size="txtManropeRegular24"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1245px] mt-[49px] mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-5 items-center justify-start w-auto">
            <Button className="border-2 border-light_green-500 border-solid flex h-10 items-center justify-center w-10">
              <Img
                className="h-4"
                src="images/img_group1484578147.svg"
                alt="group1484578147"
              />
            </Button>
            <Text
              className="capitalize text-black-900 text-xl w-auto"
              size="txtManropeRegular20"
            >
              Step 1 : Cart Review
            </Text>
          </div>
          <div className="flex flex-row gap-5 items-center justify-start w-auto">
            <Button className="border-2 border-light_green-500 border-solid flex h-10 items-center justify-center w-10">
              <Img
                className="h-4"
                src="images/img_group1484578147.svg"
                alt="group1484578148"
              />
            </Button>
            <Text
              className="capitalize text-black-900 text-xl w-auto"
              size="txtManropeRegular20"
            >
              Step 2 : Checkout
            </Text>
          </div>
          <div className="flex flex-row gap-5 items-center justify-start w-auto">
            <Text
              className="bg-blue-A400 border-2 border-blue-A400 border-solid capitalize flex h-10 items-center justify-center rounded-[50%] text-center text-white-A700 text-xl w-10"
              size="txtManropeRegular20WhiteA700"
            >
              3
            </Text>
            <Text
              className="capitalize text-black-900 text-xl w-auto"
              size="txtManropeBold20"
            >
              Step 3 : Special Offer
            </Text>
          </div>
          <div className="flex flex-row gap-5 items-center justify-start w-auto">
            <Text
              className="border-2 border-blue-A400 border-solid capitalize flex h-10 items-center justify-center rounded-[50%] text-blue-A400 text-center text-xl w-10"
              size="txtManropeRegular20BlueA400"
            >
              4
            </Text>
            <Text
              className="capitalize text-black-900 text-xl w-auto"
              size="txtManropeRegular20"
            >
              Step 4 : Confirmation
            </Text>
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col items-center justify-start max-w-[1245px] mt-10 mx-auto p-[34px] md:px-5 rounded-[10px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between my-[5px] w-full">
            <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-1/2 md:w-full">
              <Img
                className="h-[591px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/img_image4.png"
                alt="imageFour"
              />
              <div className="bg-white-A700 flex flex-col gap-[18px] items-start justify-start p-6 sm:px-5 rounded-[10px] w-[575px] sm:w-full">
                <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_rectangle1127.png"
                    alt="rectangle1127"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start w-3/4">
                    <Img
                      className="h-[11px]"
                      src="images/img_stars.svg"
                      alt="stars"
                    />
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Text
                        className="text-blue_gray-900_01 text-sm w-auto"
                        size="txtManropeBold14"
                      >
                        Ken T.
                      </Text>
                      <div className="flex flex-row gap-2.5 items-start justify-start w-[72%]">
                        <Img
                          className="h-4 w-4"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                        <Text
                          className="text-teal-300 text-xs"
                          size="txtManropeRegular12"
                        >
                          Verified Customer
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[527px] md:max-w-full text-base text-blue_gray-700"
                  size="txtManropeRegular16"
                >
                  “As soon as the Clarifions arrived I put one in my bedroom.
                  This was late in the afternoon. When I went to the bedroom in
                  the evening it smelled clean. When I went to bed I felt I
                  could breathe better. Wonderful.”
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-auto sm:w-full">
              <Text
                className="capitalize leading-[140.00%] max-w-[550px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtManropeSemiBold32"
              >
                <span className="text-blue-A400 font-manrope text-left font-normal">
                  ONE TIME ONLY
                </span>
                <span className="text-black-900 font-manrope text-left font-normal">
                  {" "}
                  special price for 6 extra Clarifion for only{" "}
                </span>
                <span className="text-blue-A400 font-manrope text-left font-normal">
                  $14 each
                </span>
                <span className="text-black-900 font-manrope text-left font-normal">
                  {" "}
                  ($84.00 total!)
                </span>
              </Text>
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                <div className="bg-blue-A400 flex flex-col h-[134px] items-center justify-start rounded-[10px] w-[134px]">
                  <Img
                    className="h-[134px] md:h-auto object-cover rounded-[10px] w-[134px]"
                    src="images/img_imageremovebgpreview.png"
                    alt="imageremovebgpr"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[15px] items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="capitalize text-black-900 text-xl w-auto"
                      size="txtManropeRegular20"
                    >
                      Clarifion Air Ionizer
                    </Text>
                    <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                      <Text
                        className="capitalize line-through text-base text-gray-500_01 w-auto"
                        size="txtManropeSemiBold16"
                      >
                        $180
                      </Text>
                      <Text
                        className="capitalize text-[22px] text-blue-A400 sm:text-lg md:text-xl w-auto"
                        size="txtManropeSemiBold22"
                      >
                        $84
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[18px] w-[98px]"
                    src="images/img_stars_amber_a400.svg"
                    alt="stars_One"
                  />
                  <Radio
                    value="12leftinStock"
                    className="font-light leading-[normal] text-base text-blue_gray-800 text-left"
                    inputClassName="bg-blue-50 h-4 mr-[5px] rounded-lg w-4"
                    checked={true}
                    name="leftinstock"
                    label="12 left in Stock"
                    id="12leftinStock"
                  ></Radio>
                  <Text
                    className="leading-[140.00%] max-w-[398px] md:max-w-full text-base text-blue_gray-700"
                    size="txtManropeRegular16Bluegray700"
                  >
                    Simply plug a Clarifion into any standard outlet and replace
                    bulky, expensive air purifiers with a simple.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-auto sm:w-full">
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_tickcircle.svg"
                    alt="tickcircle"
                  />
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtManropeRegular16Bluegray700"
                  >
                    <span className="text-blue_gray-700 font-manrope text-left font-normal">
                      Negative Ion Technology may
                    </span>
                    <span className="text-blue_gray-700 font-manrope text-left font-bold">
                      {" "}
                      help with allergens
                    </span>
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start w-auto">
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_tickcircle.svg"
                    alt="tickcircle_One"
                  />
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtManropeRegular16Bluegray700"
                  >
                    <span className="text-blue_gray-700 font-manrope text-left font-normal">
                      Designed for
                    </span>
                    <span className="text-blue_gray-700 font-manrope text-left font-bold">
                      {" "}
                      air rejuvenation
                    </span>
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start w-auto">
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_tickcircle.svg"
                    alt="tickcircle_Two"
                  />
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtManropeRegular16Bluegray700"
                  >
                    Perfect for every room in all types of places.
                  </Text>
                </div>
              </div>
              <Input
                name="price_Three"
                placeholder="Save 53% and get 6 extra Clarifision for only $14 Each."
                className="p-0 placeholder:text-black-900 text-base text-left w-full"
                wrapClassName="flex w-[98%]"
                prefix={
                  <div className="h-8 mr-4 w-8 bg-blue-A400 p-1.5 rounded-[50%] flex justify-center items-center">
                    <Img
                      className="h-[19px] my-auto"
                      src="images/img_percent.svg"
                      alt="percent"
                    />
                  </div>
                }
              ></Input>
              <div className="flex flex-col gap-5 items-center justify-start w-[542px] sm:w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center w-full"
                    rightIcon={
                      <div className="mt-[13px] mb-3 ml-[19px] bg-white-A700">
                        <Img src="images/img_line_1.svg" alt="Line 1" />
                      </div>
                    }
                    shape="round"
                    color="green_500"
                    size="sm"
                  >
                    <div className="font-bold leading-[normal] text-left text-xl uppercase">
                      Yes - Claim my discount
                    </div>
                  </Button>
                  <div className="border border-blue_gray-100 border-solid flex sm:flex-col flex-row gap-4 items-center justify-center px-4 py-2 rounded w-full">
                    <Text
                      className="capitalize text-blue_gray-700 text-xs w-auto"
                      size="txtManropeRegular12Bluegray700"
                    >
                      Free shipping
                    </Text>
                    <Line className="bg-blue_gray-100 h-4 sm:h-px sm:w-full w-px" />
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-3 w-3"
                        src="images/img_lock71.svg"
                        alt="lockSeventyOne"
                      />
                      <Text
                        className="capitalize text-blue_gray-700 text-center text-xs w-auto"
                        size="txtManropeRegular12Bluegray700"
                      >
                        Secure 256-bit SSL encryption.
                      </Text>
                    </div>
                    <Line className="bg-blue_gray-100 h-4 sm:h-px sm:w-full w-px" />
                    <div className="flex flex-row gap-0.5 items-center justify-center w-auto">
                      <Img
                        className="h-3.5"
                        src="images/img_group7.svg"
                        alt="groupSeven"
                      />
                      <Img
                        className="h-3.5"
                        src="images/img_group8.svg"
                        alt="groupEight"
                      />
                      <Img
                        className="h-3.5"
                        src="images/img_group13.svg"
                        alt="groupThirteen"
                      />
                      <Img
                        className="h-3.5"
                        src="images/img_group6.svg"
                        alt="groupSix"
                      />
                      <Img
                        className="h-3.5"
                        src="images/img_group10.svg"
                        alt="groupTen"
                      />
                      <Img
                        className="h-3.5 w-6"
                        src="images/img_applepay.svg"
                        alt="applepay"
                      />
                      <Img
                        className="h-3.5"
                        src="images/img_group.svg"
                        alt="group"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="text-lg text-red-600 underline uppercase w-auto"
                  size="txtManropeMedium18"
                >
                  No thanks, I don’t want this.
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                <Img
                  className="h-[88px] md:h-auto object-cover w-[88px]"
                  src="images/img_image6.png"
                  alt="imageSix"
                />
                <Text
                  className="leading-[140.00%] max-w-[446px] md:max-w-full text-base text-blue_gray-700"
                  size="txtManropeRegular16"
                >
                  <span className="text-blue_gray-700 font-manrope text-left font-normal">
                    If you are not completely thrilled with your Clarifion - We
                    have a{" "}
                  </span>
                  <span className="text-blue_gray-700 font-manrope text-left font-bold">
                    30 day satisfaction guarantee
                  </span>
                  <span className="text-blue_gray-700 font-manrope text-left font-normal">
                    . Please refer to our return policy at the bottom of the
                    page for more details. Happy Shopping!
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[61px] p-6 sm:px-5 w-full">
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-center justify-start md:ml-[0] ml-[103px] md:px-5 py-2 w-auto sm:w-full">
            <Text
              className="capitalize text-base text-white-A700 w-auto"
              size="txtManropeRegular16WhiteA700"
            >
              Copyright (c) 2023
            </Text>
            <Line className="bg-white-A700 h-6 sm:h-px sm:w-full w-px" />
            <Text
              className="lowercase text-base text-white-A700 w-auto"
              size="txtManropeRegular16WhiteA700"
            >
              Clarifionsupport@clarifion.com
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-center justify-start mr-[95px] md:px-5 w-auto">
            <Img
              className="h-4 w-4"
              src="images/img_lock71_white_a700.svg"
              alt="lockSeventyOne_One"
            />
            <Text
              className="capitalize text-base text-center text-white-A700 w-auto"
              size="txtManropeRegular16WhiteA700"
            >
              Secure 256-bit SSL encryption.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClarifionUpsellPage;
