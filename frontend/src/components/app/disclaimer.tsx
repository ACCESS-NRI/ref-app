import { LinkExternal } from "../ui/link";

export function Disclaimer() {
  return (
    <div className="space-y-2">
      <p className="text-sm text-amber-700 dark:text-amber-300">
        <strong>ACCESS-NRI Deployment Notice:</strong> This is an ACCESS-NRI
        deployment of the Climate-REF for evaluation of climate models submitted
        by the community to the ACCESS modelling system.
      </p>
      <p className="text-sm text-red-600 dark:text-red-400">
        The ACCESS-NRI REF is an experimental research tool provided in its
        current state to solicit user feedback, with no guarantee of quality,
        performance, stability or functionality. Every effort is being made to
        identify and address errors and bugs. Users can assist by reporting
        these on the{" "}
        <LinkExternal href="https://github.com/Climate-REF/climate-ref">
          Climate-REF GitHub repository
        </LinkExternal>
        .
      </p>
      <p className="text-sm text-red-600 dark:text-red-400">
        WCRP and CMIP governing bodies, the CMIP International Project Office,
        ACCESS-NRI, the developers, and funders of the REF accept no
        responsibility for any injury, loss, damage, or delay - direct, indirect
        or consequential - that may result from the use of the tool or reliance
        on its results.
      </p>
    </div>
  );
}
