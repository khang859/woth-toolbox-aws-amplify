import {
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { BsEyeFill } from 'react-icons/bs';
import { ButtonProps } from 'components/Button';
import { IconButton } from 'components/IconButton';
import { SectionHeader } from 'components/SectionHeader';
import { SidePanel } from 'components/SidePanel';
import { useTranslator } from 'hooks';
import { getMarkerKey } from 'lib/i18n';
import {
  getMarkerOptionTypes,
  isAnimalMarkerType,
  isGenericMarkerType,
} from 'lib/markers';
import { MarkerType, MarkerTypeAnimal, MarkerTypeGeneric } from 'types/markers';
import { HuntingMapFilterItem } from './HuntingMapFilterItem';
import { HuntingMapFilterOption } from './HuntingMapFilterOption';
import { HuntingMapFilterProps } from './types';
import styles from './HuntingMapFilter.module.css';

export const HuntingMapFilter = (props: HuntingMapFilterProps) => {
  const { animalMarkers, genericMarkers, options, onChange } = props;

  // Flag indicating whether the filter menu is currently visible
  const [menuVisible, setMenuVisible] = useState(false);

  // References to component elements
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  // Retrieve application translator
  const translate = useTranslator();

  // Extract list of types available in the options
  const markerTypes = useMemo(
    () => getMarkerOptionTypes(...animalMarkers, ...genericMarkers),
    [animalMarkers, genericMarkers],
  );

  // Extract list of types available in the options
  const markerTypesAnimals = useMemo(
    () => markerTypes.filter(isAnimalMarkerType) as Array<MarkerTypeAnimal>,
    [markerTypes],
  );

  // Extract list of types available in the options
  const markerTypesGeneric = useMemo(
    () => markerTypes.filter(isGenericMarkerType) as Array<MarkerTypeGeneric>,
    [markerTypes],
  );

  // Extract list of selected animal types
  const selectedTypesAnimals = useMemo(
    () => options.types.filter(isAnimalMarkerType) as Array<MarkerTypeAnimal>,
    [options.types],
  );

  // Extract list of selected generic types
  const selectedTypesGeneric = useMemo(
    () => options.types.filter(isGenericMarkerType) as Array<MarkerTypeGeneric>,
    [options.types],
  );

  /**
   * Handle clearing current filters
   */
  const handleClearFilters = useCallback(() => {
    // Clear filters and close the side panel
    onChange({
      exploration: true,
      labels: true,
      tracking: true,
      types: [],
    });

    setMenuVisible(false);
  }, [onChange]);

  /**
   * Handle hiding filter visibility
   */
  const handleClose = useCallback(() => setMenuVisible(false), []);

  /**
   * Enable or disable all animal options at once
   */
  const handleToggleAnimalMarkers = useCallback(
    () =>
      selectedTypesAnimals.length > 0
        ? onChange({
            ...options,
            types: selectedTypesGeneric,
          })
        : onChange({
            ...options,
            types: [...selectedTypesGeneric, ...markerTypesAnimals],
          }),
    [
      markerTypesAnimals,
      onChange,
      options,
      selectedTypesAnimals.length,
      selectedTypesGeneric,
    ],
  );

  /**
   * Handle toggling exploration markers on or off
   */
  const handleToggleExplorationMarkers = useCallback(
    (exploration: boolean) => onChange({ ...options, exploration }),
    [options, onChange],
  );

  /**
   * Enable or disable all generic options at once
   */
  const handleToggleGenericMarkers = useCallback(
    () =>
      selectedTypesGeneric.length > 0
        ? onChange({
            ...options,
            types: selectedTypesAnimals,
          })
        : onChange({
            ...options,
            types: [...selectedTypesAnimals, ...markerTypesGeneric],
          }),
    [
      markerTypesGeneric,
      onChange,
      options,
      selectedTypesAnimals,
      selectedTypesGeneric.length,
    ],
  );

  /**
   * Handle toggling labels on or off
   */
  const handleToggleLabels = useCallback(
    (labels: boolean) => onChange({ ...options, labels }),
    [options, onChange],
  );

  /**
   * Handle toggling tracking markers on or off
   */
  const handleToggleTrackingMarkers = useCallback(
    (tracking: boolean) => onChange({ ...options, tracking }),
    [options, onChange],
  );

  /**
   * Handle toggling individual filter types on or off
   */
  const handleTypeChange = useCallback(
    (type: MarkerType, selected: boolean) => {
      // Update list of enabled types
      const types = selected
        ? [...new Set(options.types).add(type)]
        : options.types.filter(marker => marker !== type);

      onChange({
        ...options,
        types: types,
      });
    },
    [options, onChange],
  );

  /**
   * Handle toggling filter visibility
   */
  const handleToggleVisibility = useCallback(
    (event?: MouseEvent<EventTarget>) => {
      event?.stopPropagation();
      setMenuVisible(current => !current);
    },
    [],
  );

  /**
   * Handle pressing keyboard keys
   */
  const handleDocumentKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'r' && !event.ctrlKey) {
        handleToggleVisibility();
      }
    },
    [handleToggleVisibility],
  );

  /**
   * Render generic options
   *
   * @param options Map of option types and names to render
   */
  const renderOptions = useCallback(
    (types: Array<MarkerTypeAnimal | MarkerTypeGeneric>, large: boolean) => (
      <>
        {types
          .map(type => ({
            name: translate(getMarkerKey(type)),
            type,
          }))
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ name, type }) => (
            <HuntingMapFilterItem
              key={type}
              large={large}
              selected={options.types.includes(type)}
              type={type}
              onChange={handleTypeChange}
            >
              {name}
            </HuntingMapFilterItem>
          ))}
      </>
    ),
    [handleTypeChange, options.types, translate],
  );

  // Render animal options
  const renderedAnimalOptions = useMemo(
    () =>
      markerTypesAnimals.length ? (
        <>
          <SectionHeader
            className={styles.HuntingMapFilterSectionHeader}
            onClick={handleToggleAnimalMarkers}
          >
            {translate('UI:SECTION_ANIMALS')}
          </SectionHeader>
          {renderOptions(markerTypesAnimals, true)}
        </>
      ) : null,
    [handleToggleAnimalMarkers, markerTypesAnimals, renderOptions, translate],
  );

  // Render generic options
  const renderedGenericOptions = useMemo(
    () =>
      markerTypesGeneric.length ? (
        <>
          <SectionHeader
            className={styles.HuntingMapFilterSectionHeader}
            onClick={handleToggleGenericMarkers}
          >
            {translate('UI:GENERAL')}
          </SectionHeader>
          {renderOptions(markerTypesGeneric, false)}
        </>
      ) : null,
    [handleToggleGenericMarkers, markerTypesGeneric, renderOptions, translate],
  );

  // Render generic options
  const renderedOtherOptions = useMemo(
    () => (
      <>
        <SectionHeader>{translate('UI:OTHER')}</SectionHeader>
        <HuntingMapFilterOption
          checked={options.labels}
          onChange={handleToggleLabels}
        >
          {translate('UI:MARKER_LABELS')}
        </HuntingMapFilterOption>
        <HuntingMapFilterOption
          checked={options.exploration}
          onChange={handleToggleExplorationMarkers}
        >
          {translate('UI:MARKER_EXPLORATION')}
        </HuntingMapFilterOption>
        <HuntingMapFilterOption
          checked={options.tracking}
          onChange={handleToggleTrackingMarkers}
        >
          {translate('UI:MARKER_TRACKING')}
        </HuntingMapFilterOption>
      </>
    ),
    [
      handleToggleExplorationMarkers,
      handleToggleLabels,
      handleToggleTrackingMarkers,
      options.exploration,
      options.labels,
      options.tracking,
      translate,
    ],
  );

  // List of sidebar action buttons
  const sidebarActions = useMemo<Array<ButtonProps>>(
    () => [
      {
        children: translate('UI:CLEAR'),
        className: styles.HuntingMapFilterActionClear,
        disabled: !options.types.length,
        onClick: handleClearFilters,
      },
    ],
    [handleClearFilters, options.types.length, translate],
  );

  // Monitor clicks outside the current marker and hide zones when needed
  useEffect(() => {
    document.addEventListener('keypress', handleDocumentKeyPress);

    return () => {
      document.removeEventListener('keypress', handleDocumentKeyPress);
    };
  }, [handleDocumentKeyPress]);

  return (
    <>
      <IconButton
        className={styles.HuntingMapFilterToggle}
        highlighted={!!options.types.length}
        ref={buttonRef}
        onClick={handleToggleVisibility}
      >
        <BsEyeFill />
      </IconButton>

      <SidePanel
        actions={sidebarActions}
        className={styles.HuntingMapFilter}
        closeOnOutsideClick={true}
        side="left"
        visible={menuVisible}
        title={translate('UI:TOGGLE_FILTERS')}
        onClose={handleClose}
      >
        <ul className={styles.HuntingMapFilterMenu} ref={menuRef}>
          {renderedGenericOptions}
          {renderedAnimalOptions}
          {renderedOtherOptions}
        </ul>
      </SidePanel>
    </>
  );
};
