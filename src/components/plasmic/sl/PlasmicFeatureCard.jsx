// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mBpzP4P3ZvRoHxGTxyta7C
// Component: sDxXBg50pC57I
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_sl.module.css"; // plasmic-import: mBpzP4P3ZvRoHxGTxyta7C/projectcss
import sty from "./PlasmicFeatureCard.module.css"; // plasmic-import: sDxXBg50pC57I/css

export const PlasmicFeatureCard__VariantProps = new Array("long");

export const PlasmicFeatureCard__ArgProps = new Array(
  "iconFront",
  "title",
  "description",
  "iconBack"
);

function PlasmicFeatureCard__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        { [sty.rootlong]: hasVariant(variants, "long", "long") }
      )}
    >
      {(hasVariant(variants, "long", "long") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__cYncu, {
            [sty.freeBoxlong__cYncuMuqV]: hasVariant(variants, "long", "long")
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__qAtVt, {
              [sty.freeBoxlong__qAtVtMuqV]: hasVariant(variants, "long", "long")
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <svg
                  className={classNames(projectcss.all, sty.svg__p3Ohf)}
                  role={"img"}
                />
              ),

              value: args.iconFront
            })}
          </div>
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__zfsdn, {
          [sty.freeBoxlong__zfsdnMuqV]: hasVariant(variants, "long", "long")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Title",
          value: args.title,
          className: classNames(sty.slotTargetTitle, {
            [sty.slotTargetTitlelong]: hasVariant(variants, "long", "long")
          })
        })}

        {p.renderPlasmicSlot({
          defaultContents:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          value: args.description,
          className: classNames(sty.slotTargetDescription, {
            [sty.slotTargetDescriptionlong]: hasVariant(
              variants,
              "long",
              "long"
            )
          })
        })}
      </p.Stack>

      {(hasVariant(variants, "long", "long") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__fyuS, {
            [sty.freeBoxlong__fyuSMuqV]: hasVariant(variants, "long", "long")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__wuzei)}
                role={"img"}
              />
            ),

            value: args.iconBack
          })}
        </div>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFeatureCard__ArgProps,
      internalVariantPropNames: PlasmicFeatureCard__VariantProps
    });

    return PlasmicFeatureCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatureCard";
  } else {
    func.displayName = `PlasmicFeatureCard.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatureCard = Object.assign(
  // Top-level PlasmicFeatureCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicFeatureCard
    internalVariantProps: PlasmicFeatureCard__VariantProps,
    internalArgProps: PlasmicFeatureCard__ArgProps
  }
);

export default PlasmicFeatureCard;
/* prettier-ignore-end */
