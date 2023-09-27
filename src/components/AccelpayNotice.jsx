import '../styles/AccelpayNotice.scss';
import { AccelpayLogo } from "./AccelpayLogo";

export const AccelpayNotice = () => {
  return (
    <a class="accelpay-notice-container" href={`https://accelpay.io?campaign=notice-rollout&referrer=${window.location.host}`} target="_blank">
      <span class="accelpay-text">
        All alcoholic beverage sales are made by licensed retailers in the
      </span>

      <span class="logo-span">
        <AccelpayLogo />
      </span>

      <span class="accelpay-text">network</span>
    </a>
  );
};
