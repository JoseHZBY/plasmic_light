// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mBpzP4P3ZvRoHxGTxyta7C
// Component: Nhx-A7ZnNobXcq
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Avatar from "../../Avatar"; // plasmic-import: qK6IECdV0IloVh/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_sl.module.css"; // plasmic-import: mBpzP4P3ZvRoHxGTxyta7C/projectcss
import sty from "./PlasmicTestimonial.module.css"; // plasmic-import: Nhx-A7ZnNobXcq/css
import QuoteDashesIcon from "./icons/PlasmicIcon__QuoteDashes"; // plasmic-import: NlxVSVUkn6KxvX/icon
import profilepicKQ2WlNrgMbvWdV from "./images/profilepic.png"; // plasmic-import: kQ2WLNrgMBVWdV/picture

export const PlasmicTestimonial__VariantProps = new Array();

export const PlasmicTestimonial__ArgProps = new Array();

function PlasmicTestimonial__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <Avatar
        data-plasmic-name={"avatar"}
        data-plasmic-override={overrides.avatar}
        className={classNames("__wab_instance", sty.avatar)}
        pic={
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"100%"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            src={{
              src: profilepicKQ2WlNrgMbvWdV,
              fullWidth: 192,
              fullHeight: 192,
              aspectRatio: undefined
            }}
          />
        }
      />

      <QuoteDashesIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg)}
        role={"img"}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__mT6U)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__mqEdG
          )}
        >
          {
            "“ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “"
          }
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__xg56P)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__h8BgM
            )}
          >
            {"Darya Finger"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__nn6NZ
            )}
          >
            {"CEO & Co-Founder @Dropbox"}
          </div>
        </p.Stack>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "avatar", "img", "svg"],
  avatar: ["avatar", "img"],
  img: ["img"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTestimonial__ArgProps,
      internalVariantPropNames: PlasmicTestimonial__VariantProps
    });

    return PlasmicTestimonial__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonial";
  } else {
    func.displayName = `PlasmicTestimonial.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonial = Object.assign(
  // Top-level PlasmicTestimonial renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    img: makeNodeComponent("img"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicTestimonial
    internalVariantProps: PlasmicTestimonial__VariantProps,
    internalArgProps: PlasmicTestimonial__ArgProps
  }
);

export default PlasmicTestimonial;
/* prettier-ignore-end */