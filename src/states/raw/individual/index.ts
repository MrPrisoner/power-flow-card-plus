import { HomeAssistant } from "custom-card-helpers";
import { getEntityStateWatts } from "../../utils/getEntityStateWatts";
import { IndividualDeviceType } from "../../../type";
import { isNumberValue } from "../../../utils/utils";
import { getEntityStateObj } from "../../utils/getEntityStateObj";

export const getIndividualState = (hass: HomeAssistant, field: IndividualDeviceType) => {
  const entity: string = field?.entity;

  if (entity === undefined) return null;

  const individualStateWatts = getEntityStateWatts(hass, entity);

  return Math.abs(individualStateWatts);
};

export const getIndividualSecondaryState = (hass: HomeAssistant, field: IndividualDeviceType) => {
  if (typeof field.entity !== "string") return null;

  const entityObj = getEntityStateObj(hass, field.entity);
  const secondaryState = entityObj?.state;

  if (isNumberValue(secondaryState)) return Math.abs(Number(secondaryState));

  return secondaryState;
};
