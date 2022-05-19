import { writable } from 'svelte/store';

// track the state of the application
export const currentState = writable({
  appState: 0, // 0 == uninitialized; 1 == introduction; 2 == game; 3 == end
  gameState: -1, // index of the current scenario, begins at -1 as starting the game immediately increments to 0
  showMenu: true, // menu is initially visible on the home screen, then its state is controlled by the app/user
  glow: 'clickableWithGlow', // initially, components can glow to indicate clickability - this is designated with the name of the CSS glow class
  overlayComponent: 0, // 0 == no overlay; 1 == Laptop; 2 == Radio; 3 == Smartphone; 4 == Landline; 99 == Info
  nonfunctionalComponents: [], // array of broken components (as indexed above)
  servedAlertsIndexes: [], // array of alerts that are being presented to the user
  roadsBlocked: false // like non-functional components, but for roads
});

// resetting sets the application to it's default state
export const defaultState = {
  appState: 0,
  gameState: -1,
  showMenu: true,
  glow: 'clickableWithGlow',
  overlayComponent: 0,
  nonfunctionalComponents: [],
  servedAlertsIndexes: [],
  roadsBlocked: false
};

// APPLICATION VARIABLES
export const DISPLAYLIMIT = 5; // max number of alerts to display at a time
export const THRESHOLD = 0.5; // probability threshold that must be passed for a component (or road) to break or fix
export const AUDIOSETTINGS = {
  lang: 'en-AU',
  loop: true,
  volume: 0.25
}; // audio defaults

// writable variable to present the user with their final time
export const finalTime = writable('00:00:00');

// REF: https://esa.act.gov.au/emergency-warning-orroral-valley-fire
// the large array of alerts, parsed from the above ESA page of the 2020 fire into a usable format
export const alerts = [
  {
    time: 'January 27, 2020 14: 32: 00',
    level: 'watch and act',
    fullText:
      'You need to be ready to follow your Bushfire Survival Plan. Activate your bushfire survival plan. Bring your pets inside, close windows and doors to minimise smoke exposure. Locate important documents, emergency kit, medication, animals, and family members. Moving your car outside if you have an electric garage door. Arrange alternative transport in case of evacuation if you do not have access to a car. Taking any additional action to protect your livestock and property. ',
    threat:
      'The fire is travelling in a south east direction. The fire is out of control and firefighters are responding to the fire. People in the area may be affected by smoke, which could reduce visibility and air quality. ',
    shortText:
      'The ACT Emergency Services Agency (ESA) advises that people in the remote areas of Orroral Valley and surrounding areas could be affected by a bushfire near Boboyan Road, Apollo Road, Top Naas Road, conditions are changing and could get worse. '
  },
  {
    time: 'January 27, 2020 16: 33: 00',
    level: 'watch and act',
    shortText:
      ' The ACT Emergency Services Agency (ESA) advises that people in Tharwa and the remote area of Orroral Valley could be affected by a bushfire near Boboyan Road, Apollo Road and Top Naas Road. Conditions are changing and could get worse. Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. Access to the area is restricted to residents only. If you do not need to be in this area, for your safety, do not enter or return. You need to be ready to follow your Bushfire Survival Plan. ',
    fullText:
      'Activate your bushfire survival plan. Pack your important documents, medication, and animals ready for transport. Put on protective clothing (e. g. , a long-sleeved cotton shirt, boots with thick soles). Moving your car outside if you have an electric garage door. Position your car to ensure a safe exit from your location. Leave now if you have decided to evacuate early. ',
    threat:
      'The fire is travelling in a south east direction. The fire is out of control and firefighters are responding to the fire. People in the area may be affected by smoke, which could reduce visibility and air quality. '
  },
  {
    time: 'January 27, 2020 18: 8: 00',
    level: 'watch and act',
    shortText:
      ' The ACT Emergency Services Agency (ESA) advises that people in Tharwa and the remote area of Orroral Valley could be affected by a bushfire near Boboyan Road, Apollo Road and Top Naas Road. Conditions are changing and could get worse. ',
    fullText:
      'Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. Access to the area is restricted to residents only. If you do not need to be in this area, for your safety, do not enter or return. You need to be ready to follow your Bushfire Survival Plan. If you do not have a plan you should start preparing now because the situation could get worse. Activate your bushfire survival plan. Pack your important documents, medication, and animals ready for transport. Put on protective clothing (e. g. , a long-sleeved cotton shirt, boots with thick soles). Moving your car outside if you have an electric garage door. Leave now if you have decided to evacuate early. ',
    threat:
      'The fire is travelling in a south east direction. The fire is out of control and firefighters are responding to the fire. People in the area may be affected by smoke, which could reduce visibility and air quality. '
  },
  {
    time: 'January 27, 2020 20: 28: 00',
    level: 'watch and act',
    shortText:
      ' The ACT Emergency Services Agency (ESA) advises that people in Tharwa and the remote area of Orroral Valley could be affected by a bushfire near Boboyan Road, Apollo Road and Top Naas Road. Conditions are changing and could get worse. Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. Access to the area is restricted to residents only. If you do not need to be in this area, for your safety, do not enter or return. ',
    fullText:
      'You need to be ready to follow your Bushfire Survival Plan. If you do not have a plan you should start preparing now because the situation could get worse. Activate your bushfire survival plan. Bring your pets inside, close windows and doors to minimise smoke exposure. Locate important documents, emergency kit, medication, animals, and family members. Moving your car outside if you have an electric garage door. Arrange alternative transport in case of evacuation if you do not have access to a car. Taking any additional action to protect your livestock and property. Taking any additional action to protect your livestock and property. ',
    threat:
      'The fire is travelling in a south east direction. The fire is out of control and firefighters are responding to the fire. People in the area may be affected by smoke, which could reduce visibility and air quality. '
  },
  {
    time: 'January 27, 2020 22: 31: 00',
    level: 'watch and act',
    shortText:
      'The ACT Emergency Services Agency (ESA) advises that people in Tharwa and the remote area of Orroral Valley could be affected by a bushfire near Boboyan Road, Apollo Road and Top Naas Road. Conditions are changing and could get worse. Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. Access to the area is restricted to residents only. ',
    fullText:
      'You need to be ready to follow your Bushfire Survival Plan. If you do not have a plan you should start preparing now because the situation could get worse. Activate your bushfire survival plan. Bring your pets inside, close windows and doors to minimise smoke exposure. Locate important documents, emergency kit, medication, animals, and family members. Moving your car outside if you have an electric garage door. Arrange alternative transport in case of evacuation if you do not have access to a car. Taking any additional action to protect your livestock and property. ',
    threat:
      'The fire is travelling in a south east direction. The fire is out of control and firefighters are on the scene. People in the area may be affected by smoke, which could reduce visibility and air quality. '
  },
  {
    time: 'January 28, 2020 0: 28: 00',
    level: 'watch and act',
    shortText:
      'The ACT Emergency Services Agency (ESA) advises that people in Tharwa and the remote area of Orroral Valley could be affected by a bushfire near Boboyan Road, Apollo Road and Top Naas Road. Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. Access to the area is restricted to residents only. ',
    fullText:
      'You need to be ready to follow your Bushfire Survival Plan. Activate your bushfire survival plan. Bring your pets inside, close windows and doors to minimise smoke exposure. Locate important documents, emergency kit, medication, animals, and family members. if you do not have access to a car arrange alternative transport in case of evacuation. Moving your car outside if you have an electric garage door. Arrange alternative transport in case of evacuation if you do not have access to a car. Taking any additional action to protect your livestock and property. ',
    threat:
      'The fire is travelling in a south east direction. The fire is out of control and firefighters are on the scene. People in the area may be affected by smoke, which could reduce visibility and air quality. '
  },
  {
    time: 'January 28, 2020 2: 31: 00',
    level: 'watch and act',
    shortText:
      'The ACT Emergency Services Agency (ESA) advises that people in Tharwa and the remote area of Orroral Valley could be affected by a bushfire near Boboyan Road, Apollo Road and Top Naas Road. Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. Access to the area is restricted to residents only. ',
    fullText:
      'You need to be ready to follow your Bushfire Survival Plan. If you do not have a plan you should start preparing now because the situation could get worse. Activate your bushfire survival plan. Bring your pets inside, close windows and doors to minimise smoke exposure. Locate important documents, emergency kit, medication, animals, and family members. if you do not have access to a car arrange alternative transport in case of evacuation. Moving your car outside if you have an electric garage door. ',
    threat:
      'The fire is travelling in a south east direction. The fire is out of control and firefighters are on the scene. People in the area may be affected by smoke, which could reduce visibility and air quality. '
  },
  {
    time: 'January 28, 2020 4: 35: 00',
    level: 'watch and act',
    shortText:
      'The ACT Emergency Services Agency (ESA) advises that people in Tharwa and the remote area of Orroral Valley could be affected by a bushfire near Boboyan Road, Apollo Road and Top Naas Road. Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. Access to the area is restricted to residents only. ',
    fullText:
      'You need to be ready to follow your Bushfire Survival Plan. Activate your bushfire survival plan. Bring your pets inside, close windows and doors to minimise smoke exposure. Locate important documents, emergency kit, medication, animals, and family members. Moving your car outside if you have an electric garage door. Arrange alternative transport in case of evacuation if you do not have access to a car. Taking any additional action to protect your livestock and property. ',
    threat:
      'The fire is travelling in a south east direction. The fire is out of control and firefighters are on the scene. People in the area may be affected by smoke, which could reduce visibility and air quality. '
  },
  {
    time: 'January 28, 2020 6: 45: 00',
    level: 'watch and act',
    fullText:
      'The ACT Emergency Services Agency (ESA) advises that people in Tharwa and the remote area of Orroral Valley could be affected by a bushfire near Boboyan Road, Apollo Road and Top Naas Road. Residents in Tharwa and the remote area of Orroral Valley should: Activate your bushfire survival plan. Bring your pets inside, close windows and doors to minimise smoke exposure. Locate important documents, emergency kit, medication, animals, and family members. Moving your car outside if you have an electric garage door. Arrange alternative transport in case of evacuation if you do not have access to a car. ',
    shortText:
      'The fire is approximately 9 kms south west of Tharwa Village and 15 kms from the nearest suburb which is Banks. ',
    threat:
      'The fire is travelling in a south east direction. The fire is out of control and firefighters are on the scene. People in the area may be affected by smoke, which could reduce visibility and air quality. '
  },
  {
    time: 'January 28, 2020 8: 40: 00',
    level: 'watch and act',
    fullText:
      'The ACT Emergency Services Agency (ESA) advises that people in Tharwa and the remote area of Orroral Valley could be affected by a bushfire near Boboyan Road, Apollo Road and Top Naas Road. Residents in Tharwa and the remote area of Orroral Valley should: Activate your bushfire survival plan. Bring your pets inside, close windows and doors to minimise smoke exposure. Locate important documents, emergency kit, medication, animals, and family members. Moving your car outside if you have an electric garage door. Arrange alternative transport in case of evacuation if you do not have access to a car. Taking any additional action to protect your livestock and property. ',
    shortText:
      'The fire is approximately 9 kms south west of Tharwa Village and 15 kms from the nearest suburb which is Banks. Spot fires are likely to travel ahead of the fire driven by afternoon winds. ',
    threat:
      'The fire is travelling in a south east direction. The fire is out of control and firefighters are on the scene. People in the area may be affected by smoke, which could reduce visibility and air quality. '
  },
  {
    time: 'January 28, 2020 10: 23: 00',
    level: 'watch and act',
    fullText:
      'The ACT Emergency Services Agency (ESA) advises that people in Tharwa and the remote area of Orroral Valley could be affected by a bushfire near Boboyan Road, Apollo Road and Top Naas Road. Activate your bushfire survival plan. Fill containers such as your bath, sinks, and buckets with water so you have access to drinking and firefighting water. Bring your pets inside, close windows and doors to minimise smoke exposure. Locate important documents, emergency kit, medication, animals, and family members. Moving your car outside if you have an electric garage door. Arrange alternative transport in case of evacuation if you do not have access to a car. Taking any additional action to protect your livestock and property. Residents in Banks, Condor, Gordon and Calwell should: ',
    shortText:
      'Spot fires are likely to travel ahead of the fire driven by afternoon winds. The fire is approximately 9 kms south west of Tharwa Village and 15 kms from the nearest suburb which is Banks. Residents in Tharwa and the remote area of Orroral Valley should: ',
    threat:
      'The fire is travelling in a south east direction. The fire is out of control and firefighters are on the scene. People in the area may be affected by smoke, which could reduce visibility and air quality. '
  },
  {
    time: 'January 28, 2020 13: 20: 00',
    level: 'emergency warning',
    fullText:
      'The ACT Emergency Services Agency (ESA) advises that a bushfire is approaching the areas of Boboyan Road, Apollo Road and Top Naas Road. Leaving immediately is the safest option. Soon it will be too dangerous to drive. An evacuation centre has been opened at Erindale College. Leave the area to a safer place immediately. If you are unable to leave: Bring pets inside. Keep smoke out of the house by closing windows and doors, sealing the gaps under doors and screens with wet towels. Fill containers such as your bath, sinks, and buckets with water so you have access to drinking and firefighting water. Identify a safe spot to shelter in, which should be a place with more than one exit, preferably inside a brick building, away from windows and doors. The safest spot is the place that will keep you furthest away from the intense heat from the fire. As the fire approaches and passes, the safest spot will change so be ready to move. Residents in Smiths Road, Tharwa and the remote area of Orroral Valley should: Activate your bushfire survival plan. Fill containers such as your bath, sinks, and buckets with water so you have access to drinking and firefighting water. Bring your pets inside, close windows and doors to minimise smoke exposure. Locate important documents, emergency kit, medication, animals, and family members. Moving your car outside if you have an electric garage door. Arrange alternative transport in case of evacuation if you do not have access to a car. Taking any additional action to protect your livestock and property. ',
    shortText:
      'There is currently no threat to properties in Tharwa or Canberra suburbs. Conditions are now very dangerous, and the fire may pose a threat to all lives directly in its path. Fire crews may not be able to protect you and your property. You should not expect a firefighter at your door. LEAVE NOW. ',
    threat:
      'The fire is travelling in a south east direction towards Boboyan Road, Apollo Road and Top Naas Road. The fire is out of control. '
  },
  {
    time: 'January 28, 2020 13: 50: 00',
    level: 'emergency warning',
    fullText:
      'The ACT Emergency Services Agency (ESA) advises that a bushfire is approaching the areas of Boboyan Road, Apollo Road and Top Naas Road. Leaving immediately is the safest option. Soon it will be too dangerous to drive. An evacuation centre has been opened at Erindale College. People in Bobyan Road, Apollo Road and Top Naas Road should: Leave the area to a safer place immediately. If you are unable to leave: Bring pets inside. Keep smoke out of the house by closing windows and doors, sealing the gaps under doors and screens with wet towels. Fill containers such as your bath, sinks, and buckets with water so you have access to drinking and firefighting water. Identify a safe spot to shelter in, which should be a place with more than one exit, preferably inside a brick building, away from windows and doors. The safest spot is the place that will keep you furthest away from the intense heat from the fire. As the fire approaches and passes, the safest spot will change so be ready to move. People in Smiths Road, Tharwa and the remote area of Orroral Valley should: Activate your bushfire survival plan. Fill containers such as your bath, sinks, and buckets with water so you have access to drinking and firefighting water. Bring your pets inside, close windows and doors to minimise smoke exposure. Locate important documents, emergency kit, medication, animals, and family members. Moving your car outside if you have an electric garage door. Arrange alternative transport in case of evacuation if you do not have access to a car. Taking any additional action to protect your livestock and property. ',
    shortText:
      'There is currently no threat to properties in Tharwa or Canberra suburbs. Conditions are now very dangerous, and the fire may pose a threat to all lives directly in its path. Fire crews may not be able to protect you and your property. You should not expect a firefighter at your door. LEAVE NOW. ',
    threat:
      'The fire is travelling in a south east direction towards Boboyan Road, Apollo Road and Top Naas Road. The fire is out of control. '
  },
  {
    time: 'January 28, 2020 14: 21: 00',
    level: 'emergency warning',
    fullText:
      'People in the areas of Boboyan Road, Apollo Road and Top Naas Road should leave immediately. Leaving immediately is the safest option. Soon it will be too dangerous to leave. If you are not in the area, do not return. People in the areas of Boboyan Road, Apollo Road and Top Naas Road should: Leave the area to a safer place immediately. An evacuation centre has been opened at Erindale College. If you are unable to leave: Fill containers such as your bath, sinks, and buckets with water so you have access to drinking and firefighting water. Identify a safe spot to shelter in, which should be a place with more than one exit, preferably inside a brick building, away from windows and doors. The safest spot is the place that will keep you furthest away from the intense heat from the fire. As the fire approaches and passes, the safest spot will change so be ready to move. People in Smiths Road, Tharwa and the remote area of Orroral Valley should: Activate your bushfire survival plan. Fill containers such as your bath, sinks, and buckets with water so you have access to drinking and firefighting water. Locate important documents, emergency kit, medication, animals, and family members. ',
    threat:
      'The fire is travelling in a south east direction towards Boboyan Road, Apollo Road and Top Naas Road. The fire is out of control. ',
    shortText:
      'There is currently no threat to properties in Tharwa or Canberra suburbs. Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. This road is only open to people evacuating. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. '
  },
  {
    time: 'January 28, 2020 14: 50: 00',
    level: 'emergency warning',
    fullText:
      'People in the areas of Boboyan Road, Apollo Road and Top Naas Road should leave immediately. Leaving immediately is the safest option. Soon it will be too dangerous to leave. If you are not in the area, do not return. People in the areas of Boboyan Road, Apollo Road and Top Naas Road should: Leave the area to a safer place immediately. An evacuation centre has been opened at Erindale College. If you are unable to leave: Fill containers such as your bath, sinks, and buckets with water so you have access to drinking and firefighting water. Identify a safe spot to shelter in, which should be a place with more than one exit, preferably inside a brick building, away from windows and doors. The safest spot is the place that will keep you furthest away from the intense heat from the fire. As the fire approaches and passes, the safest spot will change so be ready to move. People in Smiths Road, Tharwa and the remote area of Orroral Valley should: Activate your bushfire survival plan. Identify a safe spot to shelter in, which should be a place with more than one exit, preferably inside a brick building, away from windows and doors. The safest spot is the place that will keep you furthest away from the intense heat from the fire. As the fire approaches and passes, the safest spot will change so be ready to move. Locate important documents, emergency kit, medication, animals, and family members. ',
    threat:
      'The fire is travelling in a south east direction towards Boboyan Road, Apollo Road and Top Naas Road. The fire is out of control. ',
    shortText:
      'There is currently no threat to properties in Tharwa or Canberra suburbs. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. '
  },
  {
    time: 'January 28, 2020 15: 20: 00',
    level: 'emergency warning',
    fullText:
      'People in the areas of Boboyan Road, Apollo Road and Top Naas Road should leave immediately. Leaving immediately is the safest option. Soon it will be too dangerous to leave. If you are not in the area, do not return. People in the areas of Boboyan Road, Apollo Road and Top Naas Road should: Leave the area to a safer place immediately. An evacuation centre has been opened at Erindale College. If you are unable to leave: Fill containers such as your bath, sinks, and buckets with water so you have access to drinking and firefighting water. Identify a safe spot to shelter in, which should be a place with more than one exit, preferably inside a brick building, away from windows and doors. The safest spot is the place that will keep you furthest away from the intense heat from the fire. As the fire approaches and passes, the safest spot will change so be ready to move. People in Smiths Road, Tharwa and the remote area of Orroral Valley should: Activate your bushfire survival plan. Identify a safe spot to shelter in, which should be a place with more than one exit, preferably inside a brick building, away from windows and doors. The safest spot is the place that will keep you furthest away from the intense heat from the fire. As the fire approaches and passes, the safest spot will change so be ready to move. Locate important documents, emergency kit, medication, animals, and family members. People in Banks, Conder, Gordon and Calwell should: Pack your important documents, medication, and animals ready for transport. Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. This road is only open to people evacuating. Prepare family members for possible evacuation. Moving your car outside if you have an electric garage door. ',
    threat:
      'The fire is travelling in a south east direction towards Boboyan Road, Apollo Road and Top Naas Road. The fire is out of control. ',
    shortText:
      'There is currently no threat to properties in Tharwa or Canberra suburbs. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. '
  },
  {
    time: 'January 28, 2020 15: 35: 00',
    level: 'emergency warning',
    fullText:
      'If you are in the areas of Boboyan Road, Apollo Road and Top Naas Road you should: SEEK SHELTER IMMEDIATELY. It is now too late to leave. If you are not in the area, do not return. People in Tharwa should: LEAVE NOW towards the closest suburb of Canberra via Tharwa Drive. An evacuation centre has been opened at Erindale College. Leaving immediately is the safest option. Soon it will be too dangerous to leave. If you are not in the area, do not return. People in Smiths Road and the remote area of Orroral Valley should: Activate your bushfire survival plan. Identify a safe spot to shelter in, which should be a place with more than one exit, preferably inside a brick building, away from windows and doors. The safest spot is the place that will keep you furthest away from the intense heat from the fire. As the fire approaches and passes, the safest spot will change so be ready to move. Locate important documents, emergency kit, medication, animals, and family members. ',
    shortText:
      'The fire may pose a threat to all lives directly in its path. People in these suburbs are in danger and need to seek immediate shelter as the fire approaches. Driving now is extremely dangerous and potentially deadly. ',
    threat:
      'The fire is travelling in a south east direction towards Boboyan Road, Apollo Road, Top Naas Road and Tharwa. The fire is out of control. Under current conditions, a fire is difficult to control. Properties are under threat - leave now if you are able to. Firefighters are on scene. There is currently no threat to properties in Canberra suburbs. Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. This road is only open to people evacuating. Properties may be impacted by embers well ahead of the fire causing spot fires. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. Power, water and mobile phone service may be lost, and road conditions may become dangerous. '
  },
  {
    time: 'January 28, 2020 16: 6: 00',
    level: 'emergency warning',
    fullText:
      'If you are in the areas of BOBOYAN ROAD, APOLLO ROAD and TOP NAAS ROAD you should: SEEK SHELTER IMMEDIATELY. It is now too late to leave. If you are not in the area, do not return. People in THARWA should: LEAVE NOW towards the closest suburb of Canberra via Tharwa Drive. An evacuation centre has been opened at Erindale College. Leaving immediately is the safest option. Soon it will be too dangerous to leave. If you are not in the area, do not return. People in SMITHS ROAD and the remote area of ORRORAL VALLEY should: Activate your bushfire survival plan. Identify a safe spot to shelter in, which should be a place with more than one exit, preferably inside a brick building, away from windows and doors. The safest spot is the place that will keep you furthest away from the intense heat from the fire. As the fire approaches and passes, the safest spot will change so be ready to move. Locate important documents, emergency kit, medication, animals, and family members. ',
    shortText:
      'The fire may pose a threat to all lives directly in its path. People in these suburbs are in danger and need to seek immediate shelter as the fire approaches. Driving now is extremely dangerous and potentially deadly. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Boboyan Road, Apollo Road, Top Naas Road and Tharwa. The fire is out of control. Under current conditions, a fire is difficult to control. Properties are under threat - leave now if you are able to. Firefighters are on scene. There is currently no threat to properties in Canberra suburbs. Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. This road is only open to people evacuating. Properties may be impacted by embers well ahead of the fire causing spot fires. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. Power, water and mobile phone service may be lost, and road conditions may become dangerous. '
  },
  {
    time: 'January 28, 2020 16: 30: 00',
    level: 'emergency warning',
    fullText:
      'If you are in the areas of THARWA VILLAGE, BOBOYAN ROAD, APOLLO ROAD and TOP NAAS ROAD you should: SEEK SHELTER IMMEDIATELY. It is now too late to leave. If you are not in the area, do not return. People in SMITHS ROAD and the remote area of ORRORAL VALLEY should: Activate your bushfire survival plan. Identify a safe spot to shelter in, which should be a place with more than one exit, preferably inside a brick building, away from windows and doors. The safest spot is the place that will keep you furthest away from the intense heat from the fire. As the fire approaches and passes, the safest spot will change so be ready to move. Locate important documents, emergency kit, medication, animals, and family members. ',
    shortText:
      'The fire may pose a threat to all lives directly in its path. People in these suburbs are in danger and need to seek immediate shelter as the fire approaches. Driving now is extremely dangerous and potentially deadly. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Boboyan Road, Apollo Road, Top Naas Road and Tharwa Village. The fire is out of control. Under current conditions, a fire is difficult to control. Properties are under threat - leave now if you are able to. Firefighters are on scene. There is currently no immediate threat to properties in Canberra suburbs. Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. This road is only open to people evacuating. Properties may be impacted by embers well ahead of the fire causing spot fires. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. Power, water and mobile phone service may be lost, and road conditions may become dangerous. '
  },
  {
    time: 'January 28, 2020 17: 0: 00',
    level: 'emergency warning',
    fullText:
      'If you are in the areas of THARWA VILLAGE, BOBOYAN ROAD, APOLLO ROAD and TOP NAAS ROAD you should: SEEK SHELTER IMMEDIATELY. It is now too late to leave. If you are not in the area, do not return. People in SMITHS ROAD and the remote area of ORRORAL VALLEY should: Activate your bushfire survival plan. Locate important documents, emergency kit, medication, animals, and family members. People in BANKS, CONDER, GORDON, CALWELL and surrounding areas should: Activate your bushfire survival plan. ',
    shortText:
      'The fire may pose a threat to all lives directly in its path. People in these suburbs are in danger and need to seek immediate shelter as the fire approaches. Driving now is extremely dangerous and potentially deadly. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Boboyan Road, Apollo Road, Top Naas Road and Tharwa Village. The fire is out of control. Under current conditions, a fire is difficult to control. Properties are under threat - leave now if you are able to. Firefighters are on scene and are preparing for property protection. Helicopters and Large Air Tankers are water-bombing, establishing containment lines and undertaking aerial surveillance. There is currently no immediate threat to properties in Canberra suburbs. Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. This road is only open to people evacuating. Properties may be impacted by embers well ahead of the fire causing spot fires. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. Power, water and mobile phone service may be lost, and road conditions may become dangerous. '
  },
  {
    time: 'January 28, 2020 17: 32: 00',
    level: 'emergency warning',
    fullText:
      'If you are in the areas of THARWA VILLAGE, BOBOYAN ROAD, APOLLO ROAD and TOP NAAS ROAD you should: SEEK SHELTER IMMEDIATELY. It is now too late to leave. If you are not in the area, do not return. People in BANKS, CONDER, GORDON, SMITHS ROAD and the remote area of ORRORAL VALLEY should: Activate your bushfire survival plan. Locate important documents, emergency kit, medication, animals, and family members. People in CALWELL, THEODORE and surrounding areas should: Activate your bushfire survival plan. ',
    shortText:
      'The fire may pose a threat to all lives directly in its path. People in these suburbs are in danger and need to seek immediate shelter as the fire approaches. Driving now is extremely dangerous and potentially deadly. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Boboyan Road, Apollo Road, Top Naas Road and Tharwa Village. The fire is out of control. Under current conditions, a fire is difficult to control. Properties are under threat - leave now if you are able to. Firefighters are on scene and are preparing for property protection. Helicopters and Large Air Tankers are water-bombing, establishing containment lines and undertaking aerial surveillance. There is currently no immediate threat to properties in Canberra suburbs. Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. This road is only open to people evacuating. Properties may be impacted by embers well ahead of the fire causing spot fires. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. Power, water and mobile phone service may be lost, and road conditions may become dangerous. '
  },
  {
    time: 'January 28, 2020 18: 0: 00',
    level: 'emergency warning',
    fullText:
      'If you are in the areas of THARWA VILLAGE, BOBOYAN ROAD, APOLLO ROAD and TOP NAAS ROAD you should: SEEK SHELTER IMMEDIATELY. It is now too late to leave. If you are not in the area, do not return. People in BANKS, CONDER, GORDON, SMITHS ROAD and the remote area of ORRORAL VALLEY should: Activate your bushfire survival plan. Locate important documents, emergency kit, medication, animals, and family members. People in CALWELL, THEODORE and surrounding areas should: Activate your bushfire survival plan. If you are not in the area, do not return. ',
    shortText:
      'The fire may pose a threat to all lives directly in its path. People in these suburbs are in danger and need to seek immediate shelter as the fire approaches. Driving now is extremely dangerous and potentially deadly. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Boboyan Road, Apollo Road, Top Naas Road and Tharwa Village. The fire is out of control. Under current conditions, a fire is difficult to control. Firefighters are on scene and are preparing for property protection. Helicopters and Large Air Tankers are water-bombing, establishing containment lines and undertaking aerial surveillance. There is currently no immediate threat to properties in Canberra suburbs. Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. Properties may be impacted by embers well ahead of the fire causing spot fires. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. Power, water and mobile phone service may be lost, and road conditions may become dangerous. '
  },
  {
    time: 'January 28, 2020 18: 29: 00',
    level: 'emergency warning',
    fullText:
      'If you are in the areas of THARWA VILLAGE, BOBOYAN ROAD, APOLLO ROAD and TOP NAAS ROAD you should: SEEK SHELTER IMMEDIATELY. It is now too late to leave. If you are not in the area, do not return. People in BANKS, CONDER, GORDON, SMITHS ROAD and the remote area of ORRORAL VALLEY should: Activate your bushfire survival plan. Locate important documents, emergency kit, medication, animals, and family members. People in CALWELL, THEODORE and surrounding areas should: Activate your bushfire survival plan. ',
    shortText:
      'The fire may pose a threat to all lives directly in its path. People in these suburbs are in danger and need to seek immediate shelter as the fire approaches. Driving now is extremely dangerous and potentially deadly. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Boboyan Road, Apollo Road, Top Naas Road and Tharwa Village. The fire is out of control. Under current conditions, a fire is difficult to control. Firefighters are on scene and are preparing for property protection. Helicopters and Large Air Tankers are water-bombing, establishing containment lines and undertaking aerial surveillance. There is currently no immediate threat to properties in Canberra suburbs. Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. Properties may be impacted by embers well ahead of the fire causing spot fires. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. People in the area may be affected by smoke, which could reduce visibility and air quality. Power, water and mobile phone service may be lost, and road conditions may become dangerous. '
  },
  {
    time: 'January 28, 2020 19: 1: 00',
    level: 'emergency warning',
    fullText:
      'If you are in the areas of THARWA VILLAGE, BOBOYAN ROAD, APOLLO ROAD and TOP NAAS ROAD you should: SEEK SHELTER IMMEDIATELY. It is now too late to leave. If you are not in the area, do not return. People in BANKS, CONDER, GORDON, SMITHS ROAD and the remote area of ORRORAL VALLEY should: Activate your bushfire survival plan. Locate important documents, emergency kit, medication, animals, and family members. People in CALWELL, THEODORE and surrounding areas should: Activate your bushfire survival plan. ',
    shortText:
      'The fire may pose a threat to all lives directly in its path. People in these suburbs are in danger and need to seek immediate shelter as the fire approaches. Driving now is extremely dangerous and potentially deadly. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Boboyan Road, Apollo Road, Top Naas Road and Tharwa Village. The fire is out of control. The size of the fire is currently 6,122 Ha. Under current conditions, a fire is difficult to control. Firefighters are on scene and are preparing for property protection. Helicopters and Large Air Tankers are water-bombing, establishing containment lines and undertaking aerial surveillance. There is currently no immediate threat to properties in Canberra suburbs. Boboyan Road is closed from the ACT/NSW border. This road is only open to people evacuating. Properties may be impacted by embers well ahead of the fire causing spot fires. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. People in the area may be affected by smoke, which could reduce visibility and air quality. Power, water and mobile phone service may be lost, and road conditions may become dangerous. '
  },
  {
    time: 'January 28, 2020 19: 31: 00',
    level: 'emergency warning',
    fullText:
      'If you are in the areas of THARWA VILLAGE, BOBOYAN ROAD, APOLLO ROAD and TOP NAAS ROAD you should: SEEK SHELTER IMMEDIATELY. It is now too late to leave. If you are not in the area, do not return. People in BANKS, CONDER, GORDON, SMITHS ROAD and the remote area of ORRORAL VALLEY should: Activate your bushfire survival plan. Locate important documents, emergency kit, medication, animals, and family members. People in CALWELL, THEODORE and surrounding areas should: Activate your bushfire survival plan. ',
    shortText:
      'The fire may pose a threat to all lives directly in its path. People in these suburbs are in danger and need to seek immediate shelter as the fire approaches. Driving now is extremely dangerous and potentially deadly. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Boboyan Road, Apollo Road, Top Naas Road and Tharwa Village. The fire is out of control. Under current conditions, a fire is difficult to control. Firefighters are on scene and are preparing for property protection. Helicopters and Large Air Tankers are water-bombing, establishing containment lines and undertaking aerial surveillance. There is currently no immediate threat to properties in Canberra suburbs. Boboyan Road is closed from Namadgi Visitor Centre and south from Shannons Flat. Properties may be impacted by embers well ahead of the fire causing spot fires. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. People in the area may be affected by smoke, which could reduce visibility and air quality. Power, water and mobile phone service may be lost, and road conditions may become dangerous. '
  },
  {
    time: 'January 28, 2020 20: 0: 00',
    level: 'emergency warning',
    fullText:
      'If you are in the areas of THARWA VILLAGE, BOBOYAN ROAD, APOLLO ROAD and TOP NAAS ROAD you should: SEEK SHELTER IMMEDIATELY. It is now too late to leave. If you are not in the area, do not return. People in BANKS, CONDER, GORDON, SMITHS ROAD and the remote area of ORRORAL VALLEY should: Activate your bushfire survival plan. Locate important documents, emergency kit, medication, animals, and family members. People in CALWELL, THEODORE and surrounding areas should: Activate your bushfire survival plan. ',
    shortText:
      'The fire may pose a threat to all lives directly in its path. People in these suburbs are in danger and need to seek immediate shelter as the fire approaches. Driving now is extremely dangerous and potentially deadly. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Boboyan Road, Apollo Road, Top Naas Road and Tharwa Village. The fire is out of control. Under current conditions, a fire is difficult to control. Firefighters are on scene and are preparing for property protection. There is currently no immediate threat to properties in Canberra suburbs. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. Embers may travel well ahead of the fire causing spot fires. If you see an unattended fire call Triple Zero (000) immediately. People in the area may be affected by smoke, which could reduce visibility and air quality. Power, water and mobile phone service may be lost, and road conditions may become dangerous. '
  },
  {
    time: 'January 28, 2020 20: 29: 00',
    level: 'emergency warning',
    shortText:
      'The fire is starting to spot close to Tharwa Village. The fire may pose a threat to all lives directly in its path. People in these suburbs are in danger and need to seek immediate shelter as the fire approaches. Driving now is extremely dangerous and potentially deadly. ',
    fullText:
      'People in the areas of THARWA VILLAGE, BOBOYAN ROAD, APOLLO ROAD and TOP NAAS ROAD you should: SEEK SHELTER IMMEDIATELY. It is now too late to leave. If you are not in the area, do not return. People in BANKS, CONDER, GORDON, SMITHS ROAD and the remote area of ORRORAL VALLEY should: Activate your bushfire survival plan. Activate your bushfire survival plan. People in CALWELL, THEODORE and surrounding areas should: Activate your bushfire survival plan. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Boboyan Road, Apollo Road, Top Naas Road and Tharwa Village. The fire is out of control. Under current conditions, a fire is difficult to control. Firefighters are on scene and are preparing for property protection. There is currently no immediate threat to properties in Canberra suburbs. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. Embers may travel well ahead of the fire causing spot fires. If you see an unattended fire call Triple Zero (000) immediately. People in the area may be affected by smoke, which could reduce visibility and air quality. Power, water and mobile phone service may be lost, and road conditions may become dangerous. '
  },
  {
    time: 'January 28, 2020 21: 1: 00',
    level: 'emergency warning',
    shortText:
      'The fire is starting to spot close to Tharwa Village. The fire may pose a threat to all lives directly in its path. People in these suburbs are in danger and need to seek immediate shelter as the fire approaches. Driving now is extremely dangerous and potentially deadly. ',
    fullText:
      'People in the areas of THARWA VILLAGE, BOBOYAN ROAD, APOLLO ROAD and TOP NAAS ROAD you should: SEEK SHELTER IMMEDIATELY. It is now too late to leave. If you are not in the area, do not return. People in BANKS, CONDER, GORDON, SMITHS ROAD and the remote area of ORRORAL VALLEY should: Activate your bushfire survival plan. Locate important documents, emergency kit, medication, animals, and family members. People in CALWELL, THEODORE and surrounding areas should: Activate your bushfire survival plan. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Boboyan Road, Apollo Road, Top Naas Road and Tharwa Village. The fire is out of control. Under current conditions, a fire is difficult to control. Firefighters are on scene and are preparing for property protection. There is currently no immediate threat to properties in Canberra suburbs. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. Embers may travel well ahead of the fire causing spot fires. If you see an unattended fire call Triple Zero (000) immediately. People in the area may be affected by smoke, which could reduce visibility and air quality. Power, water and mobile phone service may be lost, and road conditions may become dangerous. '
  },
  {
    time: 'January 28, 2020 21: 30: 00',
    level: 'emergency warning',
    shortText:
      'There is a spot fire close to Tharwa Village, north of Spring Station Creek. Firefighters are on scene supported by a dozer. The fire may pose a threat to all lives directly in its path. People in these suburbs are in danger and need to seek immediate shelter as the fire approaches. Driving now is extremely dangerous and potentially deadly. ',
    fullText:
      'People in the areas of THARWA VILLAGE, BOBOYAN ROAD, APOLLO ROAD and TOP NAAS ROAD you should: SEEK SHELTER IMMEDIATELY. It is now too late to leave. If you are not in the area, do not return. People in BANKS, CONDER, GORDON, SMITHS ROAD and the remote area of ORRORAL VALLEY should: Activate your bushfire survival plan. Locate important documents, emergency kit, medication, animals, and family members. People in CALWELL, THEODORE and surrounding areas should: Activate your bushfire survival plan. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Boboyan Road, Apollo Road, Top Naas Road and Tharwa Village. The fire is out of control. Under current conditions, a fire is difficult to control. Firefighters are on scene and are preparing for property protection. There is currently no immediate threat to properties in Canberra suburbs. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. Embers may travel well ahead of the fire causing spot fires. If you see an unattended fire call Triple Zero (000) immediately. People in the area may be affected by smoke, which could reduce visibility and air quality. Power, water and mobile phone service may be lost, and road conditions may become dangerous. '
  },
  {
    time: 'January 28, 2020 22: 0: 00',
    level: 'emergency warning',
    shortText:
      'There is a spot fire close to Tharwa Village, north of Spring Station Creek. Firefighters are on scene supported by a dozer. The fire may pose a threat to all lives directly in its path. People in these suburbs are in danger and need to seek immediate shelter as the fire approaches. Driving now is extremely dangerous and potentially deadly. ',
    fullText:
      'People in the areas of THARWA VILLAGE, BOBOYAN ROAD, APOLLO ROAD and TOP NAAS ROAD you should: SEEK SHELTER IMMEDIATELY. It is now too late to leave. If you are not in the area, do not return. People in BANKS, CONDER, GORDON, SMITHS ROAD and the remote area of ORRORAL VALLEY should: Activate your bushfire survival plan. Locate important documents, emergency kit, medication, animals, and family members. People in CALWELL, THEODORE and surrounding areas should: Activate your bushfire survival plan. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Boboyan Road, Apollo Road, Top Naas Road and Tharwa Village. The fire is out of control. Under current conditions, a fire is difficult to control. Firefighters are on scene and are preparing for property protection. There is currently no immediate threat to properties in Canberra suburbs. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. Embers may travel well ahead of the fire causing spot fires. If you see an unattended fire call Triple Zero (000) immediately. People in the area may be affected by smoke, which could reduce visibility and air quality. Power, water and mobile phone service may be lost, and road conditions may become dangerous. '
  },
  {
    time: 'January 28, 2020 22: 30: 00',
    level: 'emergency warning',
    shortText:
      'There is a spot fire close to Tharwa Village, north of Spring Station Creek. Firefighters are on scene supported by a dozer. The fire may pose a threat to all lives directly in its path. People in these suburbs are in danger and need to seek immediate shelter as the fire approaches. Driving now is extremely dangerous and potentially deadly. ',
    fullText:
      'People in the areas of THARWA VILLAGE, BOBOYAN ROAD, APOLLO ROAD and TOP NAAS ROAD you should: SEEK SHELTER IMMEDIATELY. It is now too late to leave. If you are not in the area, do not return. People in BANKS, CONDER, GORDON, SMITHS ROAD and the remote area of ORRORAL VALLEY should: Activate your bushfire survival plan. Locate important documents, emergency kit, medication, animals, and family members. People in CALWELL, THEODORE and surrounding areas should: Activate your bushfire survival plan. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Boboyan Road, Apollo Road, Top Naas Road and Tharwa Village. The fire is out of control. Under current conditions, a fire is difficult to control. Firefighters are on scene and are preparing for property protection. There is currently no immediate threat to properties in Canberra suburbs. Conditions are very dangerous. Firefighters may be unable to prevent fire reaching your property. You should not expect a firefighter at your door. Embers may travel well ahead of the fire causing spot fires. If you see an unattended fire call Triple Zero (000) immediately. People in the area may be affected by smoke, which could reduce visibility and air quality. Power, water and mobile phone service may be lost, and road conditions may become dangerous. '
  },
  {
    time: 'January 29, 2020 1: 30: 00',
    level: 'watch and act',
    shortText:
      'There is active fire, and community members in Tharwa Village, Boboyan Road, Apollo Road, and Top Naas Road need to remain vigilant. The fire is out of control. There is currently no immediate threat to properties in Canberra suburbs. People in the area may be affected by smoke, which could reduce visibility and air quality. ',
    fullText:
      'Monitor conditions and know what you will do if the fire threatens. If you do not need to be in this area, it is still best for your safety to not enter or return. Residents of Banks, Gordon, Condor, Calwell and Theodore should continue to monitor conditions. The Bureau of Meteorology has predicted increasingly challenging fire weather for the coming weekend, driven by extremely high temperatures and low humidity. ESA advises the community to be ready to follow your Bushfire Survival Plan. If you do not have a plan you should start preparing now because the situation could get worse. No properties are under threat at this time. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Mount Tennant, Tharwa Village, Boboyan Road and Top Naas Road. '
  },
  {
    time: 'January 29, 2020 3: 30: 00',
    level: 'watch and act',
    shortText:
      'There is active fire, and community members in Tharwa Village, Boboyan Road, Apollo Road, and Top Naas Road need to remain vigilant. No properties are under threat at this time. The fire is out of control. There is currently no immediate threat to properties in Canberra suburbs. People in the area may be affected by smoke, which could reduce visibility and air quality. ',
    fullText:
      'Monitor conditions and know what you will do if the fire threatens. If you do not need to be in this area, it is still best for your safety to not enter or return. Residents of Banks, Gordon, Condor, Calwell and Theodore should continue to monitor conditions. The Bureau of Meteorology has predicted increasingly challenging fire weather for the coming weekend, driven by extremely high temperatures and low humidity. ESA advises the community to be ready to follow your Bushfire Survival Plan. If you do not have a plan you should start preparing now because the situation could get worse. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Mount Tennant, Tharwa Village, Boboyan Road and Top Naas Road. '
  },
  {
    time: 'January 29, 2020 5: 30: 00',
    level: 'watch and act',
    shortText:
      'There is active fire, and community members in Tharwa Village, Boboyan Road, Apollo Road, and Top Naas Road need to remain vigilant. No properties are under threat at this time. The fire is out of control. There is currently no immediate threat to properties in Canberra suburbs. People in the area may be affected by smoke, which could reduce visibility and air quality. ',
    fullText:
      'Monitor conditions and know what you will do if the fire threatens. If you do not need to be in this area, it is still best for your safety to not enter or return. Residents of Banks, Gordon, Condor, Calwell and Theodore should continue to monitor conditions. The Bureau of Meteorology has predicted increasingly challenging fire weather for the coming weekend, driven by extremely high temperatures and low humidity. ESA advises the community to be ready to follow your Bushfire Survival Plan. If you do not have a plan you should start preparing now because the situation could get worse. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Mount Tennant, Tharwa Village, Boboyan Road and Top Naas Road. '
  },
  {
    time: 'January 29, 2020 7: 29: 00',
    level: 'watch and act',
    shortText:
      'There is active fire, and community members in Tharwa Village, Boboyan Road, Apollo Road, and Top Naas Road need to remain vigilant. No properties are under threat at this time. The fire is out of control. There is currently no immediate threat to properties in Canberra suburbs. People in the area may be affected by smoke, which could reduce visibility and air quality. ',
    fullText:
      'Monitor conditions and know what you will do if the fire threatens. If you do not need to be in this area, it is still best for your safety to not enter or return. Residents of Banks, Gordon, Condor, Calwell and Theodore should continue to monitor conditions. The Bureau of Meteorology has predicted increasingly challenging fire weather for the coming weekend, driven by extremely high temperatures and low humidity. ESA advises the community to be ready to follow your Bushfire Survival Plan. If you do not have a plan you should start preparing now because the situation could get worse. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Mount Tennant, Tharwa Village, Boboyan Road and Top Naas Road. '
  },
  {
    time: 'January 29, 2020 9: 30: 00',
    level: 'watch and act',
    shortText:
      'There is active fire, and community members in Tharwa Village, Boboyan Road, Apollo Road, and Top Naas Road need to remain vigilant. No properties are under threat at this time. The fire is out of control. There is currently no immediate threat to properties in Canberra suburbs. People in the area may be affected by smoke, which could reduce visibility and air quality. ',
    fullText:
      'Monitor conditions and know what you will do if the fire threatens. If you do not need to be in this area, it is still best for your safety to not enter or return. Residents of Banks, Gordon, Condor, Calwell and Theodore should continue to monitor conditions. The Bureau of Meteorology has predicted increasingly challenging fire weather for the coming weekend, driven by extremely high temperatures and low humidity. ESA advises the community to be ready to follow your Bushfire Survival Plan. If you do not have a plan you should start preparing now because the situation could get worse. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Mount Tennant, Tharwa Village, Boboyan Road and Top Naas Road. '
  },
  {
    time: 'January 29, 2020 11: 31: 00',
    level: 'watch and act',
    shortText:
      'There is active fire, and community members in Tharwa Village, Boboyan Road, Apollo Road, and Top Naas Road need to remain vigilant. No properties are under threat at this time. There is an increase in fire activity on the western side of the fire. The fire is out of control. There is currently no immediate threat to properties in Canberra suburbs. People in the area may be affected by smoke, which could reduce visibility and air quality. ',
    fullText:
      'Monitor conditions and know what you will do if the fire threatens. If you do not need to be in this area, it is still best for your safety to not enter or return. People in Banks, Gordon, Conder, Calwell and Theodore should continue to monitor conditions and stay up to date. The Bureau of Meteorology has predicted increasingly challenging fire weather for the coming weekend, driven by extremely high temperatures and low humidity. ESA advises the community to be ready to follow your Bushfire Survival Plan. If you do not have a plan you should start preparing now because the situation could get worse. ',
    threat:
      'The fire is travelling in a north east and easterly direction towards Mount Tennant, Tharwa Village, Boboyan Road, Apollo Road and Top Naas Road. '
  },
  {
    time: 'January 29, 2020 13: 37: 00',
    level: 'advice',
    shortText:
      'There is active fire at the Orroral Valley Fire, and community members in Tharwa Village, Boboyan Road, Apollo Road, and Top Naas Road need to remain vigilant. There is currently no immediate threat to properties in Canberra suburbs. ',
    fullText:
      'Monitor conditions and know what you will do if the fire threatens. If you do not need to be in this area, it is still best for your safety to not enter or return. People in Banks, Gordon, Conder, Calwell and Theodore should continue to monitor conditions and stay up to date. The Bureau of Meteorology has predicted increasingly challenging fire weather for the coming weekend, driven by extremely high temperatures and low humidity. ESA advises the community to take this time to prepare and be ready to follow your Bushfire Survival Plan. If you do not have a plan you should start preparing now because the situation could get worse. ',
    threat:
      'There is limited activity on the eastern edge of the fire. There is an increase in fire activity on the western side of the fire. Active fire remains on the northern side of the fireground. The fire is out of control. Firefighters are on scene patrolling, preparing for property protection and strengthening containment lines. People in the area may be affected by smoke, which could reduce visibility and air quality. '
  },
  {
    time: 'January 29, 2020 16: 33: 00',
    level: 'advice',
    shortText:
      'There is active fire at the Orroral Valley Fire, and community members in Tharwa Village, Boboyan Road, Apollo Road, and Top Naas Road need to remain vigilant. ',
    fullText:
      'The Bureau of Meteorology has predicted increasingly challenging fire weather for the coming weekend, driven by extremely high temperatures and low humidity. ESA advises the community to take this time to prepare and be ready to follow your Bushfire Survival Plan. If you do not have a plan you should start preparing now because the situation could get worse. There is currently no immediate threat to properties in Canberra suburbs. ',
    threat:
      'There is limited activity on the eastern and northern edge of the fire. There is an increase in fire activity on the western side of the fire. The fire is out of control. Firefighters are on scene patrolling and strengthening containment lines. People in the area may be affected by smoke, which could reduce visibility and air quality. '
  },
  {
    time: 'January 30, 2020 9: 13: 00',
    level: 'advice',
    shortText:
      'There is active fire at the Orroral Valley Fire, and community members in Tharwa Village, Boboyan Road, Apollo Road, Top Naas Road and Nass Road need to remain vigilant. There is currently no immediate threat to properties in Canberra suburbs. ',
    fullText:
      'The Bureau of Meteorology has predicted increasingly challenging fire weather for the coming weekend, driven by extremely high temperatures and low humidity. ESA advises the community to take this time to prepare and be ready to follow your Bushfire Survival Plan. If you do not have a plan you should start preparing now because the situation could get worse. ',
    threat:
      'There is limited activity on the eastern and northern edge of the fire. There is an increase in fire activity on the western side of the fire. The fire is out of control. Firefighters are on scene patrolling and strengthening containment lines.  People in the area may be affected by smoke, which could reduce visibility and air quality. '
  }
];
