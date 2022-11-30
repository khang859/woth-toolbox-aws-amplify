import classnames from 'classnames';
import {
  MouseEvent as ReactMouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { HuntingMapMarker } from 'components/HuntingMapMarker';
import { getMarkerKey } from 'lib/markers';
import { AnimalMarkerOptions, MarkerOptions } from 'types/markers';
import { HuntingMapAnimalProps } from './types';
import styles from './HuntingMapAnimal.module.css';

export const HuntingMapAnimal = (props: HuntingMapAnimalProps) => {
  const {
    activated = false,
    expanded = false,
    mapScale,
    marker,
    markerRangeMap,
    maxMarkerSize,
    visible = true,
    onActivate,
    onToggle,
  } = props;

  // Mouse coordinates that allow detecting if drag occurred while holding
  // mouse cursor over the animal trigger icon
  const pageCoords = useRef<[number, number]>([-1, -1]);

  // Reference to the trigger element (animal icon)
  const triggerRef = useRef<HTMLImageElement>(null);

  /**
   * Handle mouse down on the document
   */
  const handleDocumentMouseDown = useCallback(
    (event: MouseEvent) => (pageCoords.current = [event.pageX, event.pageY]),
    [],
  );

  /**
   * Handle clicking on the trigger icon
   */
  const handleTriggerClick = useCallback(
    (marker: MarkerOptions, event: ReactMouseEvent<EventTarget>) => {
      const [mouseDownX, mouseDownY] = pageCoords.current;
      const { pageX: mouseUpX, pageY: mouseUpY } = event;

      // Cancel trigger click if mouse up coordinates aren't the same as down
      if (mouseUpX !== mouseDownX || mouseUpY !== mouseDownY) {
        event.stopPropagation();
        return;
      }

      // Toggle need zone visibility
      onToggle(marker as AnimalMarkerOptions, !expanded);

      // Activate animal if Shift key is held down while clicking on it
      if (event.shiftKey) {
        onActivate(marker as AnimalMarkerOptions);
      }
    },
    [pageCoords, onToggle, expanded, onActivate],
  );

  /**
   * Render need zones
   *
   * @param markers List of need zone markers to render
   */
  const renderZones = useCallback(
    (markers: Array<MarkerOptions>) => (
      <>
        {markers.map(marker => (
          <HuntingMapMarker
            key={getMarkerKey(marker)}
            mapScale={mapScale}
            marker={marker}
            markerRangeMap={markerRangeMap}
            maxMarkerSize={maxMarkerSize * 1.2}
            visible={activated || (visible && expanded)}
          />
        ))}
      </>
    ),
    [mapScale, markerRangeMap, maxMarkerSize, visible, expanded, activated],
  );

  // Drink need zones
  const drinkZones = useMemo(
    () => renderZones(marker.drink),
    [marker.drink, renderZones],
  );

  // Eat need zones
  const eatZones = useMemo(
    () => renderZones(marker.eat),
    [marker.eat, renderZones],
  );

  // Sleep need zones
  const sleepZones = useMemo(
    () => renderZones(marker.sleep),
    [marker.sleep, renderZones],
  );

  // Main animal icon
  const trigger = useMemo(
    () => (
      <HuntingMapMarker
        className={classnames(styles.HuntingMapAnimal, {
          [styles.HuntingMapAnimalActive]: expanded,
        })}
        highlighted={activated || expanded}
        mapScale={mapScale}
        marker={marker}
        markerRangeMap={markerRangeMap}
        maxMarkerSize={70}
        ref={triggerRef}
        visible={visible}
        onClick={handleTriggerClick}
      />
    ),
    [
      expanded,
      activated,
      mapScale,
      marker,
      markerRangeMap,
      visible,
      handleTriggerClick,
    ],
  );

  // Hide need zone icons when current animal type is removed through filters
  useEffect(() => {
    if (!visible) {
      onToggle(marker, false);
    }
  }, [marker, onToggle, visible]);

  // Monitor clicks outside the current marker and hide zones when needed
  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleDocumentMouseDown);
    };
  }, [handleDocumentMouseDown]);

  return (
    <>
      {trigger}
      {drinkZones}
      {eatZones}
      {sleepZones}
    </>
  );
};
